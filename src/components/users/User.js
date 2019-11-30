import React ,{useContext} from 'react';
import UserItem from './useritem';
import GithubContext from '../../context/github/github_context';
const User = () => {

        const githubContext = useContext(GithubContext);
        const {users} = githubContext;
        return(
            <div className="users">
                {
                    users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))
                }
            </div>
        );
    
}

export default User;