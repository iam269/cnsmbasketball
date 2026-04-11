/**
 * CNSM Baschet - Website Oficial
 * Componenta principală a aplicației
 * 
 * @module App
 * @description Configurează routing, providers și tema aplicației
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import PlayersPage from "./pages/PlayersPage.tsx";
import SchedulePage from "./pages/SchedulePage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import SponsorsPage from "./pages/SponsorsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CoachDetailPage from "./pages/CoachDetailPage.tsx";
import PlayerDetailPage from "./pages/PlayerDetailPage.tsx";
import NewsDetailPage from "./pages/NewsDetailPage.tsx";

/**
 * QueryClient pentru TanStack Query - gestionează starea serverului
 */
const queryClient = new QueryClient();

/**
 * Componenta principală a aplicației
 * Configurează providers și routing pentru întreaga aplicație
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coach/:id" element={<CoachDetailPage />} />
            <Route path="/player/:id" element={<PlayerDetailPage />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
