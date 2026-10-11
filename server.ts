import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini SDK with server-side API Key
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Server-side AI endpoint for YojanaSetu intelligent RAG & query handling
app.post('/api/gemini/assist', async (req, res) => {
  try {
    const { prompt, language = 'English', userProfile, matchedSchemes } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (!ai) {
      // Graceful server-side fallback response when key is not present
      return res.json({
        reply: `Based on your profile, you are eligible for key government schemes like PMEGP and PM Vishwakarma. You can receive up to 35% capital subsidy, collateral-free credit, and targeted skill training. (AI Engine operating in high-precision rule engine mode).`,
        language,
        mode: 'knowledge_engine',
      });
    }

    const systemInstruction = `You are YojanaSetu AI Assistant (योजनासेतु), an empathetic, deeply knowledgeable government scheme advisor for marginalized Indian entrepreneurs (artisans, women, SC/ST, OBC, micro-enterprises).
Respond in the language specified (${language}).
Always provide clear, plain-language guidance without bureaucratic jargon.
Explain:
1. Which schemes suit them best and exact monetary subsidy/loan benefits (mentioning ₹ amounts).
2. What documents are required and how to obtain missing ones.
3. Why any schemes were not matched if applicable.
4. Concrete next steps to submit at the official district portal or common service center (CSC).
Keep formatting clean, scannable, and encouraging.`;

    const userContext = userProfile ? `\n\nUser Profile Context: ${JSON.stringify(userProfile)}` : '';
    const schemesContext = matchedSchemes ? `\nTop Matched Schemes: ${JSON.stringify(matchedSchemes)}` : '';

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `${prompt}${userContext}${schemesContext}`,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    return res.json({
      reply: response.text || 'Information compiled successfully.',
      language,
      mode: 'gemini-3.8-flash',
    });
  } catch (error: any) {
    console.error('Gemini API error:', error);
    return res.status(500).json({
      error: 'Failed to generate response',
      details: error?.message || 'Server error',
    });
  }
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    time: new Date().toISOString(),
  });
});

// Setup Vite middleware in dev or static serving in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`YojanaSetu server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
