import React, { Component } from 'react'
import ProjectService from '../services/ProjectService'

class ListProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                projects: []
        }
        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    
    deleteProject(id){
        ProjectService.deleteProject(id).then( res => {
            this.setState({projects: this.state.projects.filter(project => project.id !== id)});
        });
    }
    viewProject(id){
        this.props.history.push(`/view-project/${id}`);
    }
    
    editProject(id){
        this.props.history.push(`/add-project/${id}`);
    }
 
    componentDidMount(){
        ProjectService.getProjects().then((res) => {
            this.setState({ projects: res.data});
        });
    }

    addProject(){
        this.props.history.push('/add-project/_add');
   }


    render() {
        return (
            <div>
                 <h2 className="text-center">Lista Proiecte</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProject}> Adauga Proiect</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Denumire Proiect </th>
                                    
                                    <th> Data Incepere </th>
                                    <th> Data Finalizare </th>
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.projects.map(
                                        project => 
                                        <tr key = {project.id}>
                                             <td> {project.denumireProiect} </td>   
                                             
                                             <td> {project.dataIncepere}</td>
                                             <td> {project.dataFinalizare}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editProject(project.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProject(project.id)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProjectComponent