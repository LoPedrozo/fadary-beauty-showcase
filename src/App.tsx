import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteToaster from "@/components/SiteToaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_PATHS } from "@/config/navigation";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <SiteToaster />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={APP_PATHS.home} element={<Index />} />
        <Route path={APP_PATHS.about} element={<Sobre />} />
        <Route path={APP_PATHS.products} element={<Produtos />} />
        <Route path={APP_PATHS.contact} element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
