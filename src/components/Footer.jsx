import './Footer.css'

export function Footer () {
    return (
        <footer className='section_footer'>
            <section className="contact_us">
                <div className='socialMedia'>
                <a href="https://chat.whatsapp.com/D7u9QQFCDzNIq5SSNgsNA3"
                    target="_blank"
                    rel="noreferrer">
                        <div className='img_social'></div>
                        <p>
                            Unete a nuestro whatsapp
                        </p>
                </a>
                    
                    
                </div>
                <div className='socialMedia'>
                <a href="tel:+5352459525"
                    target="_blank"
                    rel="noreferrer">
                        <div className='img_social_telefono'></div>
                        <p>
                            Llama por teléfono
                        </p>
                </a>
                </div>
                <div className='socialMedia'>   
                <a href="mailto:darielnotion@gmail.com"
                    target="_blank"
                    rel="noreferrer">
                        <div className='img_social_email'></div>
                        <p>
                            Envíanos un email
                        </p>
                </a>
                </div>
            </section>

           <div className='Logo'>
            <h3>Orozco Ventas</h3>
            <p>Lo mejor al mejor precio</p>
           </div>

        </footer>
    )
}