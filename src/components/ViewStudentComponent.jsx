import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <form>
            <div>
            
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalii Student </h3>
                    <div className = "card-body">
                    
                        <div className = "row">
                        <label> Nume : </label>
                            <div> { this.state.student.firstName } </div>
                        </div>
                        <div className = "row">
                            <label> Prenume : </label>
                            <div> { this.state.student.lastName }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Adresa : </label>
                            <div> { this.state.student.adresaName }</div>
                        </div>
                        <div className = "row">
                            <label> Numar Telefon : </label>
                            <div> { this.state.student.cevaName }</div>
                        </div>
                        <div className = "row">
                            <label> Email : </label>
                            <div> { this.state.student.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Departament : </label>
                            <div> { this.state.student.departamentName }</div>
                        </div>
                        <div className = "row">
                            <label> Proiect : </label>
                            <div> { this.state.student.projectName }</div>
                        </div>
<br></br>
 <div><a href="http://localhost:3000/students" className="btn btn-success" > Back </a></div>
                        
                    </div>

                </div>
                
            </div>
            
            
            </form>
        )
        

    }
}

export default ViewStudentComponent