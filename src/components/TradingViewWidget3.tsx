import React, { useEffect, useRef } from "react";
import logo from "../assets/logo2.png";

const TradingViewWidgets: React.FC = () => {
  const bitcoinChartRef = useRef<HTMLDivElement | null>(null);
  const technicalAnalysisRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Bitcoin Candlestick Chart Widget
    if (bitcoinChartRef.current) {
      bitcoinChartRef.current.innerHTML = "";

      const bitcoinScript = document.createElement("script");
      bitcoinScript.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      bitcoinScript.type = "text/javascript";
      bitcoinScript.async = true;
      bitcoinScript.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1", // Candlestick chart
        locale: "en",
        hide_legend: false,
        allow_symbol_change: false,
        gridColor: "rgba(66, 66, 66, 0)",
        save_image: false,
        calendar: false,
        hide_volume: false,
        support_host: "https://www.tradingview.com",
      });

      bitcoinChartRef.current.appendChild(bitcoinScript);
    }

    // Technical Analysis Widget
    if (technicalAnalysisRef.current) {
      technicalAnalysisRef.current.innerHTML = "";

      const techScript = document.createElement("script");
      techScript.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      techScript.type = "text/javascript";
      techScript.async = true;
      techScript.innerHTML = JSON.stringify({
        interval: "1m",
        width: "100%",
        isTransparent: false,
        height: "100%",
        symbol: "TVC:GOLD",
        showIntervalTabs: true,
        displayMode: "multiple",
        locale: "en",
        colorTheme: "dark",
      });

      technicalAnalysisRef.current.appendChild(techScript);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4 h-screen bg-black">
      {/* Logo header with fixed height */}
      <div className="flex justify-center items-center p-3">
        <img src={logo} alt="Company Logo" className="w-130 h-32" />
      </div>

      <div className="flex flex-row gap-20 h-screen justify-between w-full">
        {/* Bitcoin Candlestick Chart */}
        <div className="tradingview-widget-container flex-1" ref={bitcoinChartRef}>
          <div className="tradingview-widget-container__widget"></div>
        </div>

        {/* Technical Analysis Widget */}
        <div className="tradingview-widget-container flex-1 bg-black" ref={technicalAnalysisRef}>
          <div className="tradingview-widget-container__widget bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidgets;
