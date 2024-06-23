import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginContext } from './Context/LoginContext';
import { LayoutContext } from './Context/LayoutContext';
import LoginPage from './Modules/Login Module/Components/LoginPage';
import LoginRouteMapping from './Modules/Mapping/LoginRouteMapping';
const App = () => {
  return (
    <LoginContext>  
      <LayoutContext> 
        <Router>
          <Routes>
            <Route path='/' Component={LoginPage} />
            <Route path='/Home/*' Component={LoginRouteMapping} />
          </Routes>
        </Router>
      </LayoutContext>
    </LoginContext>
  );
}
export default App
