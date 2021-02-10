import React, { Component } from 'react'
import StagiuService from '../services/StagiuService'

class ListStagiuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stagiuri: []
        }
        this.addStagiu = this.addStagiu.bind(this);
        this.editStagiu = this.editStagiu.bind(this);
        this.deleteStagiu = this.deleteStagiu.bind(this);
    }

    
    deleteStagiu(id){
        StagiuService.deleteStagiu(id).then( res => {
            this.setState({stagiuri: this.state.stagiuri.filter(stagiu => stagiu.id !== id)});
        });
    }
    viewStagiu(id){
        this.props.history.push(`/view-stagiu/${id}`);
    }
    
    editStagiu(id){
        this.props.history.push(`/add-stagiu/${id}`);
    }
 
    componentDidMount(){
        StagiuService.getStagiuri().then((res) => {
            this.setState({ stagiuri: res.data});
        });
    }

    addStagiu(){
        this.props.history.push('/add-stagiu/_add');
   }


    render() {
        return (
            <div>
                 <h2 className="text-center">Lista Internshipuri</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStagiu}> Adauga Internship</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Denumire Internship </th>
                                    <th> Descriere Internship </th>
                                    <th> Data Inceput </th>
                                    <th> Durata </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stagiuri.map(
                                        stagiu => 
                                        <tr key = {stagiu.id}>
                                             <td> {stagiu.denumireStagiu} </td>   
                                             <td> {stagiu.descriereStagiu}</td>
                                             <td> {stagiu.dataInceput}</td>
                                             <td> {stagiu.durata}</td>
                                             <td>
                                                 <button onClick={ () => this.editStagiu(stagiu.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStagiu(stagiu.id)} className="btn btn-danger">Delete </button>
                                                 
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

export default ListStagiuComponent