import React from 'react'
import propTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({repos}) => {
    
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}


export default Repos;