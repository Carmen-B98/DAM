import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            cnpName: '',
            adresaName: '',
            
            emailId: '',
            departamentName: '',
            projectName: '',
            cevaName: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeCNPNameHandler = this.changeCNPNameHandler.bind(this);
        this.changeAdresaNameHandler = this.changeAdresaNameHandler.bind(this);
        
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDepartamentNameHandler = this.changeDepartamentNameHandler.bind(this);
        this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
        this.changeCevaNameHandler = this.changeCevaNameHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({firstName: student.firstName,
                lastName: student.lastName,
                cnpName: student.cnpName,
                    adresaName: student.adresaName,
                    
                    emailId : student.emailId,
                    departamentName: student.departamentName,
                    projectName : student.projectName,
                    cevaName: student.cevaName
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, cnpName: this.state.cnpName, adresaName: this.state.adresaName,  emailId: this.state.emailId, departamentName: this.state.departamentName, projectName: this.state.projectName, cevaName: this.state.cevaName};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/students');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeCNPNameHandler= (event) => {
        this.setState({cnpName: event.target.value});
    }

    changeAdresaNameHandler= (event) => {
        this.setState({adresaName: event.target.value});
    }

    changeCevaNameHandler= (event) => {
        this.setState({cevaName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeDepartamentNameHandler= (event) => {
        this.setState({departamentName: event.target.value});
    }

    changeProjectNameHandler= (event) => {
        this.setState({projectName: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Student</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>  Nume: </label>
                                            <input placeholder=" Nume " name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prenume: </label>
                                            <input placeholder=" Prenume " name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CNP: </label>
                                            <input placeholder=" CNP " name="cnpName" className="form-control" 
                                                value={this.state.cnpName} onChange={this.changeCNPNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Adresa: </label>
                                            <input placeholder=" Adresa " name="adresaName" className="form-control" 
                                                value={this.state.adresaName} onChange={this.changeAdresaNameHandler}/>
                                        </div>
                                       

                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder=" Email " name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Departament: </label>
                                            <input placeholder=" Departament " name="departamentName" className="form-control" 
                                                value={this.state.departamentName} onChange={this.changeDepartamentNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Project Name: </label>
                                            <input placeholder="Project Name" name="projectName" className="form-control" 
                                                value={this.state.projectName} onChange={this.changeProjectNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telefon: </label>
                                            <input placeholder=" Telefon " name="cevaName" className="form-control" 
                                                value={this.state.cevaName} onChange={this.changeCevaNameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateStudentComponent