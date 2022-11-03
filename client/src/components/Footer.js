import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="container mt-5">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Twilio</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Node JS</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">MongoDB</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">React JS</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Express</a></li>
                    </ul>
                    <p className="text-center text-muted">© 2022 LaHausSms, Inc</p>
                </footer>
            </div>
        </div>
    )
}
