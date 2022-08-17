import "./contact.scss"

export default function Contact() {

    return (
      
        <div className="contact" id="contact">
            
            <div className="left">
                <img src="assets/undraw_personal_email_re_4lx7.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form action="https://formsubmit.co/3e90d7fbd1533c1b970626c45357de84" method="POST">
                    <div>
                        <input name="name" type="text" placeholder="Full Name" required/>
                    </div>
                    <div>
                        <input name="email" type="email" placeholder="Email Address" required/>
                    </div>
                    <div>
                        <input name="phone" type="tel" placeholder="Phone Number"/>
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your Message" required></textarea>
                    </div>
                    
                    <button type="submit">Send</button>
                    
                </form>
            </div>
            
        </div>
        
        
    )
}