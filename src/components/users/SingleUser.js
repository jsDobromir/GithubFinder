import React, {Fragment, useEffect,useContext } from 'react'
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/github_context';

const SingleUser = ({match}) => {
        
        const githubContext = useContext(GithubContext);
        useEffect(() => { 
            getUser(match.params.login);
             getUserRepos(match.params.login);
        },[])

        const {getUser,loading,user,repos,getUserRepos} = githubContext;
        const {name,avatar_url,location,bio,blog,login,html_url,company,followers,following,public_repos,public_gists,hireable} 
        = user;
        if(loading) return <Spinner />
        return <Fragment>

        <Link to="/" className="btn btn-light">
            Back to Search
        </Link>
        Hireable : {' '}
        {hireable ? <span className="text-success">Yes</span> : <span className="text-danger">No</span> }
        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} className="round-image" alt="" style={{width : '150px'}} />
                <h1>{name}</h1>
                <p>Location : {location}</p>
            </div>
            <div>
                {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                <ul>
                    <li>
                        {login && <Fragment>
                            <strong>Username: </strong> {login}
                            </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong>Company: </strong> {company}
                            </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            <strong>Website: </strong> {blog}
                            </Fragment>}
                    </li>
                </ul>
            </div>
        </div>

        <div className="card text-center">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-danger">Public_repos: {public_repos}</div>
                        <div className="badge badge-dark">Public_gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
        </Fragment>
}


export default SingleUser
