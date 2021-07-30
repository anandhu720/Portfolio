import React from 'react'
import './_navbar.scss';


const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="navbar_left">
                    <a href="https://github.com/">ANANDHU</a>
                </div>
                <div className="navbar_right">
                    <a href="https://github.com/">RESUME</a>
                    <a href="https://github.com/">ABOUT ME</a>
                    <a href="https://github.com/">CONTACT ME</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
