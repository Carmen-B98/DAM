import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/students" className="navbar-brand">Studenti</a></div>
                    <div><a href="http://localhost:3000/stagiuri" className="navbar-brand">Internshipuri</a></div>
                    <div><a href="http://localhost:3000/projects" className="navbar-brand">Proiecte</a></div>
                    
                    
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent