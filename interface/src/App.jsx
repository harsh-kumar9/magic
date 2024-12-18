import { useState, createContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from './pages';

// Storing participant responses & relevant metrics
export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData((prevArray) => [...prevArray, newData]);
  };

  return (
    <div className="App">
      <DataContext.Provider value={{ data, addData }}>
        <Router>
          <Routes>
            <Route path="/" element={<Pages.Captcha />} />
            <Route path="/consent" element={<Pages.Consent />} />
            <Route path="/introduction" element={<Pages.Introduction />} />
            <Route path="/preshow" element={<Pages.PreShow />} />
            <Route path="/show" element={<Pages.Show />} />
            <Route path="/postshow" element={<Pages.PostShow />} />
            <Route path="/feedback" element={<Pages.Feedback />} />
            <Route path="/guess" element={<Pages.Guess />} />
            <Route path="/design" element={<Pages.Design />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
