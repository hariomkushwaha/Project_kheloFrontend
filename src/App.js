import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ProposalForm from "./components/ProposalForm";
import Home from "./components/Home";
import ProponentForm from "./components/ProponentForm";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pform" element={<ProposalForm />} />
        <Route path="aform" element={<ProponentForm />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
