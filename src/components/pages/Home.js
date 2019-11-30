import React , {Fragment} from 'react';

import Search from '../users/Search';
import User from '../users/User';
import Spinner from '../layouts/Spinner';

const Home = ({loading}) =>(
        <Fragment>
           
            <Search />
            {loading ? <Spinner /> : <User />}
        </Fragment>
    
);

export default Home;