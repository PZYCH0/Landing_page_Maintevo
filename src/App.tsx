/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';

// Core pages (Eager load Home for speed, lazy load others)
import Home from './pages/Home';

// Lazy load other views
const Features = React.lazy(() => import('./pages/Features'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Demo = React.lazy(() => import('./pages/Demo'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// New Pages
const ROICalculator = React.lazy(() => import('./pages/ROICalculator'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Integrations = React.lazy(() => import('./pages/Integrations'));
const Security = React.lazy(() => import('./pages/Security'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Help = React.lazy(() => import('./pages/Help'));
const Industries = React.lazy(() => import('./pages/Industries'));

// Feature detail pages
const WorkOrders = React.lazy(() => import('./pages/features/WorkOrders'));
const Equipment = React.lazy(() => import('./pages/features/Equipment'));
const PreventiveMaintenance = React.lazy(() => import('./pages/features/PreventiveMaintenance'));
const Inventory = React.lazy(() => import('./pages/features/Inventory'));
const KpiDashboard = React.lazy(() => import('./pages/features/KpiDashboard'));
const MaintenanceCalendar = React.lazy(() => import('./pages/features/MaintenanceCalendar'));
const Reporting = React.lazy(() => import('./pages/features/Reporting'));
const Roles = React.lazy(() => import('./pages/features/Roles'));

// Industries
const Fabrication = React.lazy(() => import('./pages/industries/Fabrication'));
const Energie = React.lazy(() => import('./pages/industries/Energie'));
const Automobile = React.lazy(() => import('./pages/industries/Automobile'));
const Sante = React.lazy(() => import('./pages/industries/Sante'));
const Agroalimentaire = React.lazy(() => import('./pages/industries/Agroalimentaire'));
const Immobilier = React.lazy(() => import('./pages/industries/Immobilier'));
const Transport = React.lazy(() => import('./pages/industries/Transport'));
const Mines = React.lazy(() => import('./pages/industries/Mines'));

const SuspenseFallback = () => (
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ width: '40px', height: '40px', border: '3px solid var(--color-border)', borderTopColor: 'var(--color-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
   </div>
);

export default function App() {
  return (
    <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Suspense fallback={<SuspenseFallback />}>
                <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/features" element={<Features />} />
                   <Route path="/pricing" element={<Pricing />} />
                   <Route path="/about" element={<About />} />
                   <Route path="/contact" element={<Contact />} />
                   <Route path="/demo" element={<Demo />} />
                   
                   <Route path="/roi" element={<ROICalculator />} />
                   <Route path="/etudes-de-cas" element={<CaseStudies />} />
                   <Route path="/integrations" element={<Integrations />} />
                   <Route path="/securite" element={<Security />} />
                   <Route path="/blog" element={<Blog />} />
                   <Route path="/aide" element={<Help />} />
                   
                   {/* Feature detail pages */}
                   <Route path="/features/work-orders" element={<WorkOrders />} />
                   <Route path="/features/equipment" element={<Equipment />} />
                   <Route path="/features/preventive-maintenance" element={<PreventiveMaintenance />} />
                   <Route path="/features/inventory" element={<Inventory />} />
                   <Route path="/features/kpi-dashboard" element={<KpiDashboard />} />
                   <Route path="/features/maintenance-calendar" element={<MaintenanceCalendar />} />
                   <Route path="/features/reporting" element={<Reporting />} />
                   <Route path="/features/roles" element={<Roles />} />

                   <Route path="/industries" element={<Industries />} />
                   <Route path="/industries/fabrication" element={<Fabrication />} />
                   <Route path="/industries/energie" element={<Energie />} />
                   <Route path="/industries/automobile" element={<Automobile />} />
                   <Route path="/industries/sante" element={<Sante />} />
                   <Route path="/industries/agroalimentaire" element={<Agroalimentaire />} />
                   <Route path="/industries/immobilier" element={<Immobilier />} />
                   <Route path="/industries/transport" element={<Transport />} />
                   <Route path="/industries/mines" element={<Mines />} />

                   <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
    </LanguageProvider>
  );
}
