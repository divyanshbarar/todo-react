import React from 'react'
import PropTypes from 'prop-types'
import "./Todo.css"
import { List,ListItemText,listItem, ListItemAvatar, Avatar, Button } from '@material-ui/core'
import db from '../firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AlarmIcon from '@material-ui/icons/Alarm';

function Todo(props) {
    
    return (
        <List>
            <ListItemAvatar>
        
         </ListItemAvatar>
            <listItem className="todolist">
            <AlarmIcon></AlarmIcon>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline"
                
                />
               
                <DeleteForeverIcon  onClick={Event =>{db.collection('todos').doc(props.todo.id).delete()}}></DeleteForeverIcon>
            </listItem>
        </List>
        
        
    )
}

Todo.propTypes = {
    todo:PropTypes.string,

}

export default Todo

