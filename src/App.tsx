import './App.css'
import Companies from './components/Companies/companies'
import Header from './components/Header/';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
// import CallToAction from './components/Call';
import GoogleGeminiEffectDemo from './components/Google';
import { TimelineDemo } from './components/Timeline';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Contact } from './components/Contact';
import Footer from './components/Footer';


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
      <Contact />
      <Footer/>

    </>
  )
}

export default App
