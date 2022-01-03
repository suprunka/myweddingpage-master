import './App.css';
import Routes from "./routes/Routes";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const history = createBrowserHistory();
 
  
  useEffect(() => {
    AOS.init();

  }, [])

  return (
    <Router history={history}>
    <Routes />

    </Router>

  );
}

export default App;
