import './App.css';
import {Routes , Route  , BrowserRouter as Router  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/Home/Home';
import MarketingPage from './Components/Plugins/MarketingPage'
import FinancePage from './Components/Finance/FinancePage';
import PersonnelPage from './Components/Personnel/PersonnelPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Marketing" element={<MarketingPage />} />
        <Route path="/Finance" element={<FinancePage />} />
        <Route path="/Personnel" element={<PersonnelPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
