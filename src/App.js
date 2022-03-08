import "./App.css";
import LogoBar from './components/LogoBar';
import TitleRibbon from './components/TitleRibbon';
import ProposalList from './components/ProposalList';

function App() {
  return (
    <div className="App">
      <LogoBar />
      <TitleRibbon title="Proposals" bgColor="rgba(196,23,23,1)"/>
      <br /><br />
      <ProposalList />
    </div>
  );
}

export default App;
