import React, { Component } from 'react'
import StudentService from '../services/StudentService';


class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            cnpName: '',
            adresaName: '',
            
            emailId: '',
            departamentName: '',
            projectName: '',
            cevaName: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeCNPNameHandler = this.changeCNPNameHandler.bind(this);
        this.changeAdresaNameHandler = this.changeAdresaNameHandler.bind(this);
        
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDepartamentNameHandler = this.changeDepartamentNameHandler.bind(this);
        this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
        this.changeCevaNameHandler = this.changeCevaNameHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1=this.handleChange1.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, cnpName: this.state.cnpName, adresaName: this.state.adresaName,  emailId: this.state.emailId, departamentName: this.state.departamentName, projectName: this.state.projectName, cevaName: this.state.cevaName};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/students');
            });
        }
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
    
    handleChange(event) {
        this.setState({projectName: event.target.value});
      }

      handleChange1(event) {
        this.setState({departamentName: event.target.value});
      }
    
      handleSubmit(event) {
        alert(' ' + this.state.value);
        event.preventDefault();
      }

      handleSubmit1(event) {
        alert(' ' + this.state.value);
        event.preventDefault();
      }

    cancel(){
        this.props.history.push('/students');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adauga Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                        <label>Departament:<br></br> </label> <br></br>
         
                                       <select value={this.state.departamentName} onChange={this.handleChange1}>
                                       <option value="Tehnologia Informatiei">Tehnologia Informatiei</option>
                                       <option value="Media">Media</option>
                                       <option value="Banci">Banci</option>
                                       <option value="Energetica">Energetica</option>
                                       <option value="Telecomunicatii">Telecomunicatii</option>
                                       </select>
                                        </div>

                                        <div className = "form-group">
                                        <label>Denumire Proiect:  <br></br></label> <br></br>
         
                                        <select value={this.state.projectName} onChange={this.handleChange}>
                                        <option value="Proiect1">Proiect 1</option>
            <option value="Proiect2">Proiect 2</option>
            <option value="Proiect3">Proiect 3</option>
            <option value="Proiect4">Proiect4</option>
                                        </select>
                                        </div>

                                        <div className = "form-group">
                                            <label> Telefon: </label>
                                            <input placeholder="Telefon" name="cevaName" className="form-control" 
                                                value={this.state.cevaName} onChange={this.changeCevaNameHandler}/>
                                        </div>
                                        
                                       
                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default CreateStudentComponent