import React from 'react'
import logo from '../img/sms.png'

export default function Navegation() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img src={ logo } alt="Bootstrap" width="40" height="40" />
                <a className="navbar-brand ml-2" href="/">LaHausSMS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Twilio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Node JS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">MongoDB</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">React JS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
