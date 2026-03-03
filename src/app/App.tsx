import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { ManifiestoSection } from './components/ManifiestoSection';
import { ColeccionesSection } from './components/ColeccionesSection';
import { ProcesoSection } from './components/ProcesoSection';
import { ArtesanasSection } from './components/ArtesanasSection';
import { GaleriaSection } from './components/GaleriaSection';
import { ContactoSection } from './components/ContactoSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#590C8A' }}>
      <NavBar />
      <HeroSection />
      <ManifiestoSection />
      <ColeccionesSection />
      <ProcesoSection />
      <ArtesanasSection />
      <GaleriaSection />
      <ContactoSection />
      <FooterSection />
    </div>
  );
}
