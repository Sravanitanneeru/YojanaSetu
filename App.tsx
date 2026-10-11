import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AbstractShowcase } from './components/AbstractShowcase';
import { ConversationalAssessment } from './components/ConversationalAssessment';
import { SchemeResults } from './components/SchemeResults';
import { SchemeDirectory } from './components/SchemeDirectory';
import { ApplicationTracker } from './components/ApplicationTracker';
import { AdminPanel } from './components/AdminPanel';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';

import { OFFICIAL_SCHEMES } from './data/schemes';
import { SAMPLE_PROFILES } from './data/sampleProfiles';
import { rankAndFilterSchemes } from './utils/eligibilityEngine';
import { UserProfile, Scheme, ApplicationTrackerItem, LanguageCode } from './types';
import { MessageSquareText, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'assessment' | 'directory' | 'tracker' | 'abstract' | 'admin'>('assessment');
  const [language, setLanguage] = useState<LanguageCode>('en');

  // Schemes Knowledge Base (mutable in officer admin)
  const [schemes, setSchemes] = useState<Scheme[]>(OFFICIAL_SCHEMES);

  // User Profile state (default initialized with benchmark scenario)
  const [userProfile, setUserProfile] = useState<UserProfile>(SAMPLE_PROFILES[0]);
  const [hasEvaluated, setHasEvaluated] = useState<boolean>(true);

  // Active Applications Tracker list
  const [applications, setApplications] = useState<ApplicationTrackerItem[]>([
    {
      id: 'app-sunita-vishwakarma',
      schemeId: 'pm-vishwakarma',
      schemeName: 'PM Vishwakarma Scheme',
      applicantName: 'Sunita Devi',
      appliedDate: '12/10/2026',
      requestedAmount: 200000,
      currentStage: 'Portal Registration',
      stageProgress: 40,
      applicationRefNumber: 'YS-UP-849201',
      bankName: 'State Bank of India',
      branch: 'Mirzapur Rural Branch',
      notes: 'Biometric verification scheduled at CSC Mirzapur. ₹15,000 toolkit voucher claim initiated.',
      reminders: [
        {
          id: 'rem-s1',
          task: 'Complete Gram Panchayat artisan self-declaration sign-off',
          dueDate: 'Tomorrow',
          completed: true,
          priority: 'High',
        },
        {
          id: 'rem-s2',
          task: 'Attend 5-day basic pottery skill upgradation workshop at DIC',
          dueDate: 'In 4 days',
          completed: false,
          priority: 'High',
        },
        {
          id: 'rem-s3',
          task: 'Receive ₹15,000 digital toolkit e-voucher on mobile',
          dueDate: 'In 7 days',
          completed: false,
          priority: 'Medium',
        },
      ],
    },
    {
      id: 'app-ramesh-pmegp',
      schemeId: 'pmegp',
      schemeName: "Prime Minister's Employment Generation Programme (PMEGP)",
      applicantName: 'Ramesh Kumar',
      appliedDate: '02/10/2026',
      requestedAmount: 600000,
      currentStage: 'Department / DIC Verification',
      stageProgress: 65,
      applicationRefNumber: 'YS-BR-309118',
      bankName: 'Punjab National Bank',
      branch: 'Darbhanga MSME Hub',
      notes: 'Eligible for 35% Special Rural Subsidy = ₹2,10,000 cash grant. Machine quotations submitted.',
      reminders: [
        {
          id: 'rem-r1',
          task: 'Submit Makhana processing machine quotations to PNB loan officer',
          dueDate: 'In 3 days',
          completed: false,
          priority: 'High',
        },
        {
          id: 'rem-r2',
          task: 'Register for 10-day online EDP training on KVIC portal',
          dueDate: 'In 8 days',
          completed: false,
          priority: 'Medium',
        },
      ],
    },
  ]);

  // AI Assistant Drawer state
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState<boolean>(false);
  const [aiAssistantPrompt, setAiAssistantPrompt] = useState<string>('');

  // Toast notice
  const [toastMessage, setToastMessage] = useState<string>('');

  // Calculate matching results
  const { eligibleSchemes, ineligibleSchemes } = useMemo(() => {
    return rankAndFilterSchemes(userProfile, schemes.filter((s) => s.isActive));
  }, [userProfile, schemes]);

  const handleSelectSampleProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    setHasEvaluated(true);
    setCurrentTab('assessment');
    setToastMessage(`Loaded profile: ${profile.name} (${profile.category})`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleEvaluate = () => {
    setHasEvaluated(true);
    setToastMessage('Matching schemes calculated with official guidelines.');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddToTracker = (newItem: ApplicationTrackerItem) => {
    setApplications((prev) => [newItem, ...prev]);
    setToastMessage(`Added "${newItem.schemeName}" to your live tracker.`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAskAiAboutScheme = (schemeName: string) => {
    setAiAssistantPrompt(`Can you explain the exact benefits, eligibility rules, and document checklist for ${schemeName}?`);
    setIsAiDrawerOpen(true);
  };

  const handleSelectSchemeFromDirectory = (scheme: Scheme) => {
    setCurrentTab('assessment');
    setHasEvaluated(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        language={language}
        setLanguage={setLanguage}
        onOpenAiAssistant={() => {
          setAiAssistantPrompt('');
          setIsAiDrawerOpen(true);
        }}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 text-xs font-semibold flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {/* TAB 1: Assessment / Results */}
        {currentTab === 'assessment' && (
          <div>
            <Hero
              language={language}
              onStartAssessment={() => setHasEvaluated(false)}
              onSelectSampleProfile={handleSelectSampleProfile}
              onExploreDirectory={() => setCurrentTab('directory')}
            />

            {!hasEvaluated ? (
              <ConversationalAssessment
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                language={language}
                onEvaluate={handleEvaluate}
                onSelectSampleProfile={handleSelectSampleProfile}
              />
            ) : (
              <SchemeResults
                userProfile={userProfile}
                eligibleSchemes={eligibleSchemes}
                ineligibleSchemes={ineligibleSchemes}
                language={language}
                onAddToTracker={handleAddToTracker}
                onModifyProfile={() => setHasEvaluated(false)}
                onAskAiAboutScheme={handleAskAiAboutScheme}
              />
            )}
          </div>
        )}

        {/* TAB 2: Scheme Catalog */}
        {currentTab === 'directory' && (
          <SchemeDirectory
            schemes={schemes}
            onSelectSchemeForAssessment={handleSelectSchemeFromDirectory}
            onAskAiAboutScheme={handleAskAiAboutScheme}
          />
        )}

        {/* TAB 3: Responsive Real-Time Tracker */}
        {currentTab === 'tracker' && (
          <ApplicationTracker
            applications={applications}
            setApplications={setApplications}
            onExploreSchemes={() => {
              setCurrentTab('assessment');
              setHasEvaluated(false);
            }}
          />
        )}

        {/* TAB 4: Abstract, Step-by-Step Methodology & Architecture */}
        {currentTab === 'abstract' && <AbstractShowcase />}

        {/* TAB 5: Officer Admin Panel */}
        {currentTab === 'admin' && (
          <AdminPanel schemes={schemes} setSchemes={setSchemes} />
        )}
      </main>

      {/* Floating Action Button for AI Advisor */}
      <button
        onClick={() => {
          setAiAssistantPrompt('');
          setIsAiDrawerOpen(true);
        }}
        className="fixed bottom-6 left-6 z-40 bg-slate-900 hover:bg-slate-800 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg border border-slate-700 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
        aria-label="Open AI Scheme Advisor"
      >
        <Sparkles className="w-5 h-5 text-amber-400" />
        <span className="hidden sm:inline text-xs font-bold">Ask YojanaSetu AI</span>
      </button>

      {/* AI Assistant Drawer */}
      <AIAssistantDrawer
        isOpen={isAiDrawerOpen}
        onClose={() => setIsAiDrawerOpen(false)}
        userProfile={userProfile}
        matchedSchemes={eligibleSchemes.map((r) => r.scheme)}
        language={language}
        initialQuestion={aiAssistantPrompt}
      />

      {/* Clean Unboxed Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs text-slate-600">
            <div className="space-y-2 md:col-span-2">
              <span className="text-sm font-bold text-slate-900">YojanaSetu (योजनासेतु)</span>
              <p className="max-w-md text-slate-500 leading-relaxed">
                Empowering marginalized entrepreneurs (artisans, women, SC/ST, OBC, and micro-enterprises) with algorithmic scheme matching, subsidy transparency, and an active application lifecycle tracker.
              </p>
              <div className="flex items-center gap-2 text-slate-500 pt-2">
                <span>Advancing UN SDGs</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-700">SDG 1 (No Poverty)</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-700">SDG 8 (Decent Work)</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-700">SDG 10 (Reduced Inequalities)</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold text-slate-900 uppercase block">Government Portals</span>
              <p><a href="https://pmvishwakarma.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-700">PM Vishwakarma Portal</a></p>
              <p><a href="https://www.kviconline.gov.in/pmegp/" target="_blank" rel="noreferrer" className="hover:text-amber-700">KVIC PMEGP e-Portal</a></p>
              <p><a href="https://www.mudra.org.in" target="_blank" rel="noreferrer" className="hover:text-amber-700">MUDRA / JanSamarth</a></p>
              <p><a href="https://www.standupmitra.in" target="_blank" rel="noreferrer" className="hover:text-amber-700">Stand-Up Mitra</a></p>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold text-slate-900 uppercase block">Civic Transparency</span>
              <p>Deterministic Policy Rules Engine</p>
              <p>Transparent "Why Not Matched" Logs</p>
              <p>7 Indian Languages Voice Interface</p>
              <p>Zero Intermediary Fee Guarantee</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
            <div>
              © 2026 YojanaSetu Project · Official Central and State Schemes Knowledge Engine
            </div>
            <div>
              Built for Marginalized Entrepreneurs and Grassroots Inclusive Prosperity
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
