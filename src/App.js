import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import Home from "./view/home/Home";
import Dashboard from "./view/dashboard/Dashboard";
import ViewVersions from "./view/view-versions/ViewVersions";
import Upload from "./view/upload/Upload";

function App() {
  return (
    <div>
      <Router>
        <Outlet />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/view-versions/:id" element={<ViewVersions />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
