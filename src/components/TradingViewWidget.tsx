import React, { useEffect, useRef, memo } from "react";
import logo from "../assets/logo.png";

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;
    if (container.current.children.length > 0) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "CAPITALCOM:GOLD",
      interval: "1",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      hide_legend: true,
      allow_symbol_change: false,
      gridColor: "rgba(66, 66, 66, 0)",
      save_image: false,
      calendar: false,
      hide_volume: true,
      support_host: "https://www.tradingview.com",
    });

    container.current.appendChild(script);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Logo header with fixed height */}
      <div className="flex justify-center items-center p-3">
        <img src={logo} alt="Company Logo" className="w-60 h-22" />
      </div>

      {/* Chart container with responsive height */}
      <div
        ref={container}
        className="tradingview-widget-container flex-1 w-full"
        style={{
          minHeight: 300, // Ensures minimum usable height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default memo(TradingViewWidget);
