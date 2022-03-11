import Navbar from '../../components/navbar/Navbar';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Skills from '../../components/skills/Skills';
import Contact from '../../components/contact/Contact';


export default function Main() {
	return(
		<div>
			<Navbar />
	     	<Home />
	      	<About />
	      	<Projects />
	      	<Skills />
	       	<Contact />

		</div>
	)
}