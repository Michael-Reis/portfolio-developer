import './App.css'
import Companies from './components/Companies/companies'
import Header from './components/Header/';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
// import CallToAction from './components/Call';
import GoogleGeminiEffectDemo from './components/Google';
function App() {

  return (
    <>
      <Header />
      <Companies />
      <About />
      <Technology />
      <Projects />
      {/* <CallToAction /> */}
      <GoogleGeminiEffectDemo />


    </>
  )
}

export default App
