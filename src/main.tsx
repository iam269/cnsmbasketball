/**
 * CNSM Baschet - Website Oficial
 * Entry point pentru aplicația React
 * 
 * @module main
 * @description Initializează aplicația React și montează root element-ul
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Montează aplicația React în elementul cu id="root"
createRoot(document.getElementById("root")!).render(<App />);
