import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/about";
import Events from "../pages/events";
import Accommodations from "../pages/accommodations";
import Dining from "../pages/dining";
import Marketplace from "../pages/marketplace";
import Cultural from "../pages/cultural";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/cultural" element={<Cultural />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
