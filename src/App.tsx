import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TradingViewWidget from "./components/TradingViewWidget";
import TradingViewWidget2 from "./components/TradingViewWidget2";
import TradingViewWidget3 from "./components/TradingViewWidget3";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col bg-[#242424]">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<TradingViewWidget />} />
            <Route path="/widget2" element={<TradingViewWidget2 />} />
            <Route path="/widget3" element={<TradingViewWidget3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
