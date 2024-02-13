import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'


interface Props{
    name: string;
    email: string;
}

const UserItems = ({name,email}:Props) => {
    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>

                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={email}></ListItemText>
            </ListItem>
        </div>
    )
}

export default UserItems