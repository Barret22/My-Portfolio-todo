import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Todo = () => {
    // Логика списка задач

    return (
        <div style={{ padding: '20px' }}>
            <h2>TODO List</h2>
            <TextField label="New Task" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary">Add Task</Button>
            <List>
                {/* Список задач */}
                <ListItem>
                    Example Task
                </ListItem>
            </List>
        </div>
    );
};

export default Todo;
