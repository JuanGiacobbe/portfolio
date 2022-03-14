
// importing react-router components
import { NavLink } from 'react-router-dom'

// importing font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";


// importing styles
import './footer.css'

export default function Footer() {
	return(

		<div className='footer-container'>
				<div className='footer-content'>
					<h4 className='footer-sub'>Contact with me</h4>
					<div className='footer-icons'>
						<a href='instagram.com/juan_giacobbe_' target='_blank'>
							<FontAwesomeIcon className='icon' icon={faInstagramSquare} />
						</a>

						<a href='/instagram.com/juan_giacobbe_' target='_blank'>
							<FontAwesomeIcon className='icon' icon={faGithubSquare} />
						</a>

						<a href='instagram.com/juan_giacobbe_' target='_blank'>
							<FontAwesomeIcon className='icon' icon={faTwitterSquare} />
						</a>

					</div>
				</div>
				<div className='footer-content'>
					<h3 className='footer-sub'>Got a project in mind?</h3>
					<NavLink to='/contact' className='btn contact-btn'>Let's talk</NavLink>
				</div>
				<div className='footer-content'>
					<a href='#home' className='up-btn'><FontAwesomeIcon  icon={faAngleUp}/></a>
					<p>Go back to home section!</p>
				</div>

		</div>
		)
}