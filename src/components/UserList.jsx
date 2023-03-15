import React from 'react'
import users from "../info.json"
import UserItem from './UserItem'

const UserList = () => {
    return (
        <div className='main-container'>
            {users.users.map(user => (
                <UserItem user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UserList