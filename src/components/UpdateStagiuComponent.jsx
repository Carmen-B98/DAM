import React, { Component } from 'react'
import StagiuService from '../services/StagiuService';

class UpdateStagiuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            denumireStagiu: '',
            descriereStagiu: '',
            dataInceput: '',
            durata: ''
        }
        this.changeDenumireStagiuNameHandler = this.changeDenumireStagiuNameHandler.bind(this);
        this.changeDescriereStagiuNameHandler = this.changeDescriereNameHandler.bind(this);
        this.changeDataInceputNameHandler = this.changeDataInceputNameHandler.bind(this);
        this.changeDurataNameHandler = this.changeDurataNameHandler.bind(this);
        
        this.updateStagiu = this.updateStagiu.bind(this);
    }

    componentDidMount(){
        StagiuService.getStagiuById(this.state.id).then( (res) =>{
            let stagiu = res.data;
            this.setState({denumireStagiu: stagiu.denumireStagiu,
                descriereStagiu: stagiu.descriereStagiu,
                    dataInceput: stagiu.dataInceput,
                    durata: stagiu.durata
                   
            });
        });
    }

    updateStagiu = (e) => {
        e.preventDefault();
        let stagiu = {denumireStagiu: this.state.denumireStagiu, descriereStagiu: this.state.descriereStagiu, dataInceput: this.state.dataInceput, durata: this.state.durata};
        console.log('stagiu => ' + JSON.stringify(stagiu));
        console.log('id => ' + JSON.stringify(this.state.id));
        StagiuService.updateStagiu(stagiu, this.state.id).then( res => {
            this.props.history.push('/stagiuri');
        });
    }
    
    changeDenumireStagiuNameHandler= (event) => {
        this.setState({denumireStagiu: event.target.value});
    }

    changeDescriereStagiuNameHandler= (event) => {
        this.setState({descriereStagiu: event.target.value});
    }

    changeDataInceputNameHandler= (event) => {
        this.setState({dataInceput: event.target.value});
    }

    changeDurataNameHandler= (event) => {
        this.setState({durata: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/stagiuri');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Internship</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>  Denumire Internship: </label>
                                            <input placeholder=" Denumire Internship " name="denumireStagiu" className="form-control" 
                                                value={this.state.denumireStagiu} onChange={this.changeDenumireStagiuNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Descriere Internship: </label>
                                            <input placeholder=" Descriere Internship " type= "textarea "name="descriereStagiu" className="form-control" 
                                                value={this.state.descriereStagiu} onChange={this.changeDescriereStagiuNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Inceput: </label>
                                            <input placeholder=" Data Inceput " name="dataInceput" className="form-control" 
                                                value={this.state.dataInceput} onChange={this.changeDataInceputNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Durata: </label>
                                            <input placeholder=" Durata " name="durata" className="form-control" 
                                                value={this.state.durata} onChange={this.changeDurataNameHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateStagiu}>Save</button>
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

export default UpdateStagiuComponent