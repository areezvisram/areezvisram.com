import React from "react"

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
        <div className="contact-all">
            <div className="contact-title">Get In Touch <hr className="contact-line"></hr></div>
                <form className="contact-form" action="https://getform.io/f/7bff0f42-a22f-4d24-bb5b-809fa1c3f441" method="POST">
                    <section>
                        <div className="section1">
                            <label className="contact-label-name">Name</label>
                            <input type="text" name="name" className="contact-input-name"></input>
                        </div>
                        <div className="section2">
                            <label className="contact-label-email">Email</label>
                            <input type="email" name="email" className="contact-input-email"></input>
                        </div>
                    </section>

                    <label className="contact-label-message">Message</label>
                    <textarea type="text" name="message" className="contact-input-message"></textarea>

                    <button type="submit" className="contact-submit-button">Submit</button>
                </form>
        </div>
    </div>
  )
}
export default Contact
