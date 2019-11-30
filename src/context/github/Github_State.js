import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './github_context';
import GithubReducer from './github_reducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_SINGLEUSER,
    GET_REPOS
}from '../types';

const GithubState = props => {
    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading : false
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState);

    //Search user

    const searchUser = async userName => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${userName}`);
        dispatch({
            type : SEARCH_USERS,
            payload : res.data.items
        });
    }


    //Get user
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch({
            type : GET_SINGLEUSER,
            payload : res.data
        });
    }
    //Get repos
    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        dispatch({
            type : GET_REPOS,
            payload : res.data
        })
    }
    //Clear users
    const clearUsers = () => dispatch({type : CLEAR_USERS})
    //Set loading
    const setLoading = () => dispatch({type : SET_LOADING});


    return <GithubContext.Provider value={{
        users : state.users,
        user : state.user,
        repos : state.repos,
        loading : state.loading,
        searchUser,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;