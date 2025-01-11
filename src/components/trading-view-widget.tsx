// "use client";

// import { useEffect, useRef, useState } from "react";

// interface TradingViewWidgetProps {
//   symbol: string;
//   theme?: "light" | "dark";
// }

// let tvScriptLoadingPromise: Promise<void> | null = null;

// export function TradingViewWidget({
//   symbol,
//   theme = "light",
// }: TradingViewWidgetProps) {
//   const onLoadScriptRef = useRef<(() => void) | null>(null);
//   const [isChartReady, setIsChartReady] = useState(false);

//   useEffect(() => {
//     onLoadScriptRef.current = createWidget;

//     if (!tvScriptLoadingPromise) {
//       tvScriptLoadingPromise = new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.id = "tradingview-widget-loading-script";
//         script.src = "https://s3.tradingview.com/tv.js";
//         script.type = "text/javascript";
//         script.onload = resolve as () => void;

//         document.head.appendChild(script);
//       });
//     }

//     tvScriptLoadingPromise.then(
//       () => onLoadScriptRef.current && onLoadScriptRef.current()
//     );

//     return () => {
//       onLoadScriptRef.current = null;
//     };

//     function createWidget() {
//       if (
//         document.getElementById("tradingview-widget") &&
//         "TradingView" in window
//       ) {
//         new (window as any).TradingView.widget({
//           autosize: true,
//           symbol: symbol,
//           interval: "D",
//           timezone: "Etc/UTC",
//           theme: theme,
//           style: "1",
//           locale: "en",
//           toolbar_bg: "#f1f3f6",
//           enable_publishing: false,
//           allow_symbol_change: true,
//           container_id: "tradingview-widget",
//           hide_top_toolbar: false,
//           hide_legend: false,
//           save_image: false,
//           studies: ["MASimple@tv-basicstudies"],
//           show_popup_button: true,
//           popup_width: "1000",
//           popup_height: "650",
//         });
//         setIsChartReady(true);
//       }
//     }
//   }, [symbol, theme]);

//   return (
//     <div
//       className="tradingview-widget-container"
//       style={{ height: "100%", width: "100%" }}
//     >
//       <div
//         id="tradingview-widget"
//         style={{ height: "calc(100% - 32px)", width: "100%" }}
//       />
//       {!isChartReady && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//         </div>
//       )}
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// }
