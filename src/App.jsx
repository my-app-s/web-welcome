import './App.css'
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Footer from './components/Footer/Footer'
import Metrics from './components/Metrics/Metrics'

function App() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Experience />
        <Metrics />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
