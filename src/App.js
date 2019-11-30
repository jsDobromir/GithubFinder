import React, {Fragment,useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; 
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/Github_State';
import AlertState from './context/alert/alertState';

import './App.css';
import { thisTypeAnnotation } from '@babel/types';
import SingleUser from './components/users/SingleUser';

const App = () => {

    const [loading,setLoading] = useState(false);
        
        return(
            <GithubState>
            <AlertState>
            <Router>
                <div className='App'>
                    <Navbar/>
                    
                    <div className="container">
                        <Alert/>
                        <Switch>
                            <Route exact path="/" component={Home} loading={loading} />
                            <Route exact path="/about" component={About} />
                            <Route exact path='/SingleUser/:login' component={SingleUser} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                
                </div>
            </Router>
            </AlertState>
            </GithubState>
        );
}

export default App;