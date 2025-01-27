import { NavbarComponent } from './components/navbarcomponent/navbarcomponent.js'
import { BannerComponent } from './components/bannercomponent/bannercomponent.js'
import { LightboxComponent } from './components/lightboxcomponent/lightboxcomponent.js';
import { ContactComponent } from './components/contactcomponent/contactcomponent.js';
import { ContentComponent } from './components/contentcomponent/contentcomponent.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavbarComponent />
      <BannerComponent />
      <ContentComponent />
      <LightboxComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
