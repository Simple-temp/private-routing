import { BrowserRouter as  Router, Route, Routes  } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Manage from './component/Manage/Manage';
import Others from './component/Others/Others';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/ohters" element={ <PrivateRoute>
            <Others/>
          </PrivateRoute> } />
          <Route path="/manage" element={ <PrivateRoute>
            <Manage/>
          </PrivateRoute> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
