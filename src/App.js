import { Routes, Route } from "react-router-dom";
import ProposalForm from "./components/ProposalForm";
import Home from "./components/Home";
import ProponentForm from "./components/ProponentForm";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import ProponentDashboard from "./components/ProponentDashboard/ProponentDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aform" element={<ProposalForm />} />
        <Route path="pform" element={<ProponentForm />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="padmin" element={<ProponentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
