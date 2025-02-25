import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';

function UsersList(props) {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h1> No user found</h1>
            </div>
        )
    }
    
    return (
        <ul className="users-list">
            {props.items.map(item => (
                <UserItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    placeCount={item.places} />
            ))}

        </ul>
    )
}

export default UsersList