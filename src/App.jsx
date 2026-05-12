import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Consult from "./pages/Consult";
import WhyUs from "./pages/WhyUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />
          <Route path="partners" element={<Partners />} />
          <Route path="consult" element={<Consult />} />
          <Route path="whyUs" element={<WhyUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
