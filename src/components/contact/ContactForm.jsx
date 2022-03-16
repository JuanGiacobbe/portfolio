// importing styles
import './ContactForm.css';


export default function ContactForm() {
    return (
        <div className='contact-form'>
            <form className='form'>
                <div className='data-input'>
                    <div>
                    <label for='#name' className='label' >Name: </label>
                    <input type='text' id='#name' className='input name' required />
                    </div>
                    <div>
                    <label for='#mail' className='label'>Email: </label>
                    <input type='email' id='name' className='input email' required />
                    </div>
                </div>
                    <div>

                    <label for='#msg' className='label'>Message: </label>
                    <textarea type='text' id='msg' className='input msg' required />
                    </div>

                <input type='submit' className='btn submit' value='send'/>

            </form>
        </div>
    );
}