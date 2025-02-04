import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";

const TradingViewWidgets: React.FC = () => {
  const marketOverviewRef = useRef<HTMLDivElement | null>(null);
  const technicalAnalysisRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Market Overview Widget
    if (marketOverviewRef.current) {
      marketOverviewRef.current.innerHTML = "";

      const marketScript = document.createElement("script");
      marketScript.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      marketScript.type = "text/javascript";
      marketScript.async = true;
      marketScript.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "1D",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "100%",
        height: "100%",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(42, 46, 57, 0)",
        scaleFontColor: "rgba(219, 219, 219, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
          {
            title: "Futures",
            symbols: [
              { s: "CAPITALCOM:GOLD" },
              { s: "CAPITALCOM:SILVER" },
              { s: "CAPITALCOM:PLATINUM" },
              { s: "CAPITALCOM:COPPER" },
            ],
            originalTitle: "Futures",
          },
        ],
      });

      marketOverviewRef.current.appendChild(marketScript);
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
        displayMode: "single",
        locale: "en",
        colorTheme: "dark",
      });

      technicalAnalysisRef.current.appendChild(techScript);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      {/* Logo header with fixed height */}
      <div className="flex justify-center items-center p-3">
        <img src={logo} alt="Company Logo" className="w-60 h-22" />
      </div>

      <div className="flex flex-row gap-20 h-screen justify-between w-full">
        {/* Market Overview Widget */}
        <div className="tradingview-widget-container" ref={marketOverviewRef}>
          <div className="tradingview-widget-container__widget"></div>
        </div>

        {/* Technical Analysis Widget */}
        <div
          className="tradingview-widget-container"
          ref={technicalAnalysisRef}
        >
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidgets;
