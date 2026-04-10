import UserCard from '@/components/UserCard';
import React, { Suspense } from 'react';





const UsersPage = () => {

    const dataPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

    return (
        <div>
            this is the user page

            <Suspense fallback={<div>loading...</div>}>
                <UserCard DataPromise={dataPromise}></UserCard>
            </Suspense>
        </div>
    );
};

export default UsersPage;