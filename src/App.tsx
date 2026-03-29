import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import CompanyHome from "./pages/CompanyHome";
import CompanyJobs from "./pages/CompanyJobs";
import CompanyCandidates from "./pages/CompanyCandidates";
import CompanyNews from "./pages/CompanyNews";
import SeekerHome from "./pages/SeekerHome";
import SeekerResume from "./pages/SeekerResume";
import SeekerLearning from "./pages/SeekerLearning";
import SeekerApplications from "./pages/SeekerApplications";
import SeekerTraining from "./pages/SeekerTraining";
import SeekerCommunity from "./pages/SeekerCommunity";
import SeekerNews from "./pages/SeekerNews";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/seeker" replace />} />

        <Route element={<Layout />}>
          {/* Company Routes */}
          <Route path="/company" element={<CompanyHome />} />
          <Route path="/company/jobs" element={<CompanyJobs />} />
          <Route path="/company/candidates" element={<CompanyCandidates />} />
          <Route path="/company/news" element={<CompanyNews />} />

          {/* Seeker Routes */}
          <Route path="/seeker" element={<SeekerHome />} />
          <Route path="/seeker/resume" element={<SeekerResume />} />
          <Route path="/seeker/applications" element={<SeekerApplications />} />
          <Route path="/seeker/learning" element={<SeekerLearning />} />
          <Route path="/seeker/training" element={<SeekerTraining />} />
          <Route path="/seeker/community" element={<SeekerCommunity />} />
          <Route path="/seeker/news" element={<SeekerNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
