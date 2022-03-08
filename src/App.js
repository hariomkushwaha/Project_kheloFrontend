import "./App.css";
import LogoBar from './components/LogoBar';
import TitleRibbon from './components/TitleRibbon';

function App() {
  return (
    <div className="App">
      <LogoBar />
      <TitleRibbon title="Proposals" bgColor="rgba(196,23,23,1)"/>
    </div>
  );
}

export default App;
