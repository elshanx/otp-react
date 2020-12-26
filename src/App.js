import LoginPage from './LoginPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/login'>
        <LoginPage />
      </Route>
      <Route exact path='/'>
        <h1>Welcome</h1>
      </Route>
    </Router>
  );
}

export default App;
