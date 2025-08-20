import './App.css'
import Companies from './components/Companies/companies'
import Header from './components/Header/';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
// import CallToAction from './components/Call';
import { TimelineDemo } from './components/Timeline';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import GoogleGeminiEffectDemo from './components/Google';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { Jobs } from './components/Jobs';
import { FloatingButtons } from './components/FloatingButtons';
import Contacts from './components/Contacts';


function App() {

  return (
    <>
      <ScrollProgress />
      <Header />
      <Companies />
      <About />
      <Technology />
      <Projects />
      {/* <CallToAction /> */}
      <TimelineDemo />
      <GoogleGeminiEffectDemo />
      <Jobs/>
      <Contacts/>
      {/* <Contact /> */}
      <Footer/>
      <FloatingButtons />
    </>
  )
}

export default App
