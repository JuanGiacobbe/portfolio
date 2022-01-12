import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';



function App() {
  return (
    <main className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
