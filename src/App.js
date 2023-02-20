import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import Home from "./view/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Outlet />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
