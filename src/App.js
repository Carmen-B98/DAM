
import './App.css';

import   {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListStudentComponent1 from './components/ListStudentComponent1';
import ListStudentComponent from './components/ListStudentComponent';

import CreateStudentComponent from './components/CreateStudentComponent';

import UpdateStudentComponent from './components/UpdateStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

import CreateStagiuComponent from './components/CreateStagiuComponent';
import UpdateStagiuComponent from './components/UpdateStagiuComponent';
import ListStagiuComponent from './components/ListStagiuComponent';

import CreateProjectComponent from './components/CreateProjectComponent';
import UpdateProjectComponent from './components/UpdateProjectComponent';
import ListProjectComponent from './components/ListProjectComponent';


function App() {
  return (
    <div>
        <Router>
        <HeaderComponent />
                <div className="container">
                    <Switch> 
                        <Route path = "/" exact component = {ListStudentComponent}></Route>
                          
                          <Route path = "/students" component = {ListStudentComponent1}></Route>
                          <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
                         <Route path = "/update-student/:id" component = {UpdateStudentComponent}></Route> 

                         <Route path = "/stagiuri" component = {ListStagiuComponent}></Route>
                         <Route path = "/add-stagiu/:id" component = {CreateStagiuComponent}></Route>
                         <Route path = "/update-stagiu/:id" component = {UpdateStagiuComponent}></Route>

                         <Route path = "/projects" component = {ListProjectComponent}></Route>
                         <Route path = "/add-project/:id" component = {CreateProjectComponent}></Route>
                         <Route path = "/update-project/:id" component = {UpdateProjectComponent}></Route>

                         
                         

                         
                    </Switch>
                </div>
                
                <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;