import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "@/pages/WelcomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}
