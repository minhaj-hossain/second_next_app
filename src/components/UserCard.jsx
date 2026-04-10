import React, { use } from 'react';
import Users from './Users';

const UserCard = ({ DataPromise }) => {


    const users = use(DataPromise)
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                users.map(user => <Users key={user.id} user={user}></Users>)
            }
        </div>
    );
};

export default UserCard;