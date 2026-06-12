import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Comparison = React.lazy(() => import('./pages/Comparison'));
const Industries = React.lazy(() => import('./pages/Industries'));
const Enterprise = React.lazy(() => import('./pages/Enterprise'));
const Resources = React.lazy(() => import('./pages/Resources'));
const WorkOrders = React.lazy(() => import('./pages/features/WorkOrders'));
const Equipment = React.lazy(() => import('./pages/features/Equipment'));
const PreventiveMaintenance = React.lazy(() => import('./pages/features/PreventiveMaintenance'));
const Inventory = React.lazy(() => import('./pages/features/Inventory'));
const KpiDashboard = React.lazy(() => import('./pages/features/KpiDashboard'));
const MaintenanceCalendar = React.lazy(() => import('./pages/features/MaintenanceCalendar'));
const Reporting = React.lazy(() => import('./pages/features/Reporting'));
const Roles = React.lazy(() => import('./pages/features/Roles'));

function Loader() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'60vh'}}>
      <div style={{width:'40px',height:'40px',border:'3px solid rgba(255,255,255,.1)',borderTopColor:'#3b82f6',borderRadius:'50%',animation:'spin 1s linear infinite'}} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/comparison" element={<Comparison />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/features/work-orders" element={<WorkOrders />} />
              <Route path="/features/equipment" element={<Equipment />} />
              <Route path="/features/preventive-maintenance" element={<PreventiveMaintenance />} />
              <Route path="/features/inventory" element={<Inventory />} />
              <Route path="/features/kpi-dashboard" element={<KpiDashboard />} />
              <Route path="/features/maintenance-calendar" element={<MaintenanceCalendar />} />
              <Route path="/features/reporting" element={<Reporting />} />
              <Route path="/features/roles" element={<Roles />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
