import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

const UserItem = (props) =>{
    
    
    
        return(
            <div className="card text-center">
                <img src={props.user.avatar_url} alt="img" className="round-img" style={{width : '60px'}}/>
                <h3>{<Link to={`/SingleUser/${props.user.login}`} className="btn btn-dark btn-sm my-1">{props.user.login}</Link>}</h3>
            </div>
        );
    
} 

export default UserItem;