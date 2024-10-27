import './contacts/contacts.css';


function Contacts() {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label><br></br>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label><br></br>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br></br>
                    <textarea
                        id="message"
                        name="message"
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contacts;
