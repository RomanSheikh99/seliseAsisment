import Calendar from "./components/Calendar/Calendar";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/year/:year/month/:month" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
