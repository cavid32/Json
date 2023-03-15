import React from 'react'

const UserItem = ({ user }) => {
    return (
        <div className='cart'>
            <h2>name: {user.name}</h2>
            <h2>surname: {user.surname}</h2>
            <h2>age :{user.age}</h2>
        </div>
    )
}

export default UserItem