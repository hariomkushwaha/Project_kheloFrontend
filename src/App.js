import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import PropsalForm from "./components/ProposalForm";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pform" element={<PropsalForm />} />
      </Routes>
    </div>
  );
}

export default App;
