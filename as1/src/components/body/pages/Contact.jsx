import React from 'react';

const Contact = (props) => {
  return (
        <div id="contact" className="main-content">
            <div className="contact-title main-content-title">
              <h2>Kontakt</h2>
            </div>
            <div className="contact-description">
              {/* <p></p> */}
              <div>
                <p>Sprzedaż hurtowa</p>
                <div>
                  <p><span>telefon: </span><a href="tel:+48601838006">601-838-006</a></p>
                  <p><span>email: </span><a href="mailto:zamowienia@choinkipomorze.pl">zamowienia@choinkipomorze.pl</a></p>
                </div>
              </div>
              <div>
                <p>Pomoc oraz błędy:</p>
                <div>
                  <p><span>email: </span><a href="mailto:support@choinkipomorze.pl">support@choinkipomorze.pl</a></p>
                </div>
              </div>
              <p><span>facebook: </span><a href="https://www.facebook.com/choinkipomorze/">choinkipomorze</a></p>
            </div>
            <div className="contact-form">

            </div>
        </div>
    );
}

export default Contact;
