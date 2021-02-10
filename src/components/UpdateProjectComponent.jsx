import React, { Component } from 'react'
import ProjectService from '../services/ProjectService'

class UpdateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            denumireProiect: '',    
            dataIncepere: '',
            dataFinalizare: ''
        }
        this.changeDenumireProiectNameHandler = this.changeDenumireProiectNameHandler.bind(this);
       
        this.changeDataIncepereNameHandler = this.changeDataIncepereNameHandler.bind(this);
        this.changeDataFinalizareNameHandler = this.changeDataFinalizareNameHandler.bind(this);
        
        this.updateProject = this.updateProject.bind(this);
    }

    componentDidMount(){
        ProjectService.getProjectById(this.state.id).then( (res) =>{
            let project = res.data;
            this.setState({denumireProiect: project.denumireProiect,
                    
                dataIncepere: project.dataIncepere,
                dataFinalizare: project.dataFinalizare
                   
            });
        });
    }

    updateProject = (e) => {
        e.preventDefault();
        let project = {denumireProiect: this.state.denumireProiect, dataIncepere: this.state.dataIncepere, dataFinalizare: this.state.dataFinalizare};
        console.log('project => ' + JSON.stringify(project));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProjectService.updateProject(project, this.state.id).then( res => {
            this.props.history.push('/projects');
        });
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
    
    

    cancel(){
        this.props.history.push('/projects');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Project</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>  Denumire Proiect: </label>
                                            <input placeholder=" Denumire Proiect " name="denumireProiect" className="form-control" 
                                                value={this.state.denumireProiect} onChange={this.changeDenumireProiectNameHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> Data Incepere: </label>
                                            <input placeholder=" Data Incepere " name="dataIncepere" className="form-control" 
                                                value={this.state.dataIncepere} onChange={this.changeDataIncepereNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Finalizare: </label>
                                            <input placeholder=" Data Finalizare " name="dataFinalizare" className="form-control" 
                                                value={this.state.dataFinalizare} onChange={this.changeDataFinalizareNameHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateProject}>Save</button>
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

export default UpdateProjectComponent