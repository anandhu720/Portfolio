import React from 'react'
import './_navbar.scss';


const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="navbar_left">
                    <a href="#home">ANANDHU</a>
                </div>
                <div className="navbar_right">
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/17TLcPVrp0gJnLTRgP8suWBxzFPsRw0Wa/view?usp=sharing">RESUME</a>
                    <a href="#about">ABOUT ME</a>
                    <a target="_blank" rel="noreferrer" href="mailto:anandhu4310@gmail.com">CONTACT ME</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
