
// importing components

import Navbar from '../../components/navbar/Navbar';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Skills from '../../components/skills/Skills';
import Footer from '../../components/footer/Footer';



export default function Main() {
	return(
		<div>
			<Navbar />
	     	<Home />
	      	<About />
	      	<Projects />
	      	<Skills />
	       	<Footer />

		</div>
	)
}