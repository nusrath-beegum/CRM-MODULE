import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/RegistrationForm";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import Deals from "./pages/Deals";
import DealsView from "./pages/DealsView";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4 bg-light">{children}</div>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route
          path="/deals"
          element={
            <AppLayout>
              <Deals />
            </AppLayout>
          }
        />
        <Route
          path="/deals/:id"
          element={
            <AppLayout>
              <DealsView />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
