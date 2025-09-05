import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Marketing Website Pages
import { Homepage } from './pages/marketing/Homepage';
import { HowItWorks } from './pages/marketing/HowItWorks';
import { ForStudents } from './pages/marketing/ForStudents';
import { ForParents } from './pages/marketing/ForParents';
import { ForTeachers } from './pages/marketing/ForTeachers';
import { ForAdministrators } from './pages/marketing/ForAdministrators';
import { AboutUs } from './pages/marketing/AboutUs';
import { ResearchResults } from './pages/marketing/ResearchResults';
import { JoinWaitlist } from './pages/marketing/JoinWaitlist';
import { Contact } from './pages/marketing/Contact';
import { PrivacyPolicy } from './pages/marketing/PrivacyPolicy';
import { ESACalculator } from './pages/marketing/ESACalculator';
import { ESAInfo } from './pages/marketing/ESAInfo';

// Import global styles
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing Website Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/for-students" element={<ForStudents />} />
        <Route path="/for-parents" element={<ForParents />} />
        <Route path="/for-teachers" element={<ForTeachers />} />
        <Route path="/for-administrators" element={<ForAdministrators />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/research" element={<ResearchResults />} />
        <Route path="/join-waitlist" element={<JoinWaitlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/esa-calculator" element={<ESACalculator />} />
        <Route path="/esa-info" element={<ESAInfo />} />
      </Routes>
    </Router>
  );
}

export default App;