import "./App.css";
import {Route} from 'react-router-dom';
import HomePage from "./components/HomePage";

function App() {
  return (
    <Route path="/">
        <HomePage />
    </Route>
  );
}

export default App;
