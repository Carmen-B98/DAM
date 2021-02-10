import React, { Component } from 'react'
import ProjectService from '../services/ProjectService';



class CreateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            denumireProiect: '',    
            dataIncepere: '',
            dataFinalizare: ''
        }
        this.changeDenumireProiectNameHandler = this.changeDenumireProiectNameHandler.bind(this);
       
        this.changeDataIncepereNameHandler = this.changeDataIncepereNameHandler.bind(this);
        this.changeDataFinalizareNameHandler = this.changeDataFinalizareNameHandler.bind(this);
        
        this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
        this.saveOrUpdateProject = this.saveOrUpdateProject.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProjectService.getProjectById(this.state.id).then( (res) =>{
                let project = res.data;
                this.setState({denumireProiect: project.denumireProiect,
                    
                    dataIncepere: project.dataIncepere,
                    dataFinalizare: project.dataFinalizare
                    
                });
            });
        }        
    }
    saveOrUpdateProject = (e) => {
        e.preventDefault();
        let project = {denumireProiect: this.state.denumireProiect, dataIncepere: this.state.dataIncepere, dataFinalizare: this.state.dataFinalizare};
        console.log('project => ' + JSON.stringify(project));

        // step 5
        if(this.state.id === '_add'){
            ProjectService.createProject(project).then(res =>{
                this.props.history.push('/projects');
            });
        }else{
            ProjectService.updateProject(project, this.state.id).then( res => {
                this.props.history.push('/projects');
            });
        }
    }
    
    changeDenumireProiectNameHandler= (event) => {
        this.setState({denumireProiect: event.target.value});
    }

  

    changeDataIncepereNameHandler= (event) => {
        this.setState({dataIncepere: event.target.value});
    }

    changeDataFinalizareNameHandler= (event) => {
        this.setState({dataFinalizare: event.target.value});
    }
    
    handleChange(event) {
        this.setState({denumireProiect: event.target.value});
      }
    
      handleSubmit(event) {
        alert(' ' + this.state.value);
        event.preventDefault();
      }
    

    cancel(){
        this.props.history.push('/projects');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adauga Proiect</h3>
        }else{
            return <h3 className="text-center">Update Proiect</h3>
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
                                            <label>  Denumire Proiect: </label>
                                            <input placeholder=" Denumire Proiect " name="denumireProiect" className="form-control" 
                                                value={this.state.denumireProiect} onChange={this.changeDenumireProiectNameHandler}/>
                                    </div>
                                   
                                        
                                        <div className = "form-group">
                                            <label> Data Incepere: </label>
                                            <input placeholder=" Data Incepere " name="dataIncepere" type="date" required pattern ="\d{4}-\d{2}-\d{2}"  className="form-control" 
                                                value={this.state.dataIncepere} onChange={this.changeDataIncepereNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Finalizare: </label>
                                            <input placeholder=" Data Finalizare " name="dataFinalizare" type="date" className="form-control" 
                                                value={this.state.dataFinalizare} onChange={this.changeDataFinalizareNameHandler}/>
                                        </div>
                                        
                                       
                                       
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProject}>Save</button>
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

export default CreateProjectComponent