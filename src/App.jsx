import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}
