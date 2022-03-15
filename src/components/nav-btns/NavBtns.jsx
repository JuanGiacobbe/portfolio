
// importing components
import Contact from '../../components/contact/Contact'

// importing react-router
import { NavLink } from 'react-router-dom'

// importing font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'; 

// importing styles
import './navbtns.css'
export default function NavBtns() {
	return(
		<div className='nav-btns'>

			<NavLink to='/' className='nav-btn'>
				<FontAwesomeIcon icon={faArrowLeft} />
					Home page
			</NavLink>

			<Contact />
		</div>


	)
}