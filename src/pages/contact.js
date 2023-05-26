import React from 'react';
import NavBar from "./navbar.js";

const Contact = () => {
    return (
        <main>
            <NavBar />
            <h1>Contact</h1>
            <p>
                email: <a href="mailto:kohnkaleb@gmail.com"></a>
                <a href="https://www.linkedin.com/in/kaleb-kohn-2a1b3622b/">
                    <img src="..\images\linkedin_icon.png" alt="linkedin icon" />
                </a>
                <a href="https://github.com/KohnKaleb">
                    <img src="../images/github_icon.png" alt="github icon" />
                </a>
            </p>
        </main>
     
    )
}

export default Contact;