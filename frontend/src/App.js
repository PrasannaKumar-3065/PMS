import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginContext } from './Context/LoginContext';
import { LayoutContext } from './Context/LayoutContext';
import Home from './Modules/Home Module/Components/Home';
import LoginPage from './Modules/Login Module/Components/LoginPage';
import CustomIndex from './Modules/Customization Module/Components/CustomIndex';
const App = () => {
  return (
    <LoginContext>
      <LayoutContext>
        <Router>
          <Routes>
            <Route path='/login' Component={LoginPage} />
            <Route path='/Home' Component={Home} />
            <Route path='/Custom' Component={CustomIndex} />
          </Routes>
        </Router>
      </LayoutContext>
    </LoginContext>
  );
}
export default App
