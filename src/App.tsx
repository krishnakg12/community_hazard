import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportHazard from './pages/ReportHazard';
import ViewReports from './pages/ViewReports';
import AuthorityDashboard from './pages/AuthorityDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportHazard />} />
            <Route path="/view-reports" element={<ViewReports />} />
            <Route path="/authority-dashboard" element={<AuthorityDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;