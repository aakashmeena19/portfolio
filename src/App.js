import Navbar  from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

 
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
