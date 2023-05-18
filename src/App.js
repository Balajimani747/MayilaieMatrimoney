import Profiles from './component/profile/profiles';
import OpeningPage from './component/openingPage/openingPage';
import Login from './component/login/login';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

function App() {
  return (
   <Router>
      <main>
          <Routes>
             <Route exact path="/" element={<OpeningPage />} />
             <Route exact path="/login" element={<Login />} />
             <Route path="/profiles" element={<Profiles />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
