import React from 'react'
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

import LabelImportantSharpIcon from '@mui/icons-material/LabelImportantSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { mainContext } from '../../store/context';
import type { todoItemProps } from '../Form/Form';

const Cards = () => {
    const { todoList, setTodoList }= mainContext();
    
    const deleteTodo = (id:Number) => {
        setTodoList(todoList.filter((todo:todoItemProps) => todo.id !== id))
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    return (
        <div
         className='cards-container'
        >
            { todoList.length !== 0 && (todoList?.map((todo:any) => (
                <Card key={todo.id} sx={{ minWidth: 275, maxWidth: 300 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }}   component="div">
                            <IconButton color="primary" size="small">
                                <LabelImportantSharpIcon/> 
                            </IconButton>
                            {todo.todoItemName}
                        </Typography>
                        <Typography sx={{ mb: 1, fontSize: 14 }} color="text.secondary">
                            <Tooltip title="Date Created">
                                <IconButton color="primary" size="small">
                                    <AccessTimeSharpIcon/> 
                                </IconButton>
                            </Tooltip>
                            {todo.createdDate}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                            <Tooltip title="Date Ending">
                                <IconButton color="primary" size="small">
                                    <CalendarMonthSharpIcon/> 
                                </IconButton>
                            </Tooltip>
                            {new Date(todo.deadLineDate).toLocaleString() }
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Tooltip title="Delete">
                            <IconButton onClick={() => deleteTodo(todo.id)} color="primary" size="small">
                                <DeleteSharpIcon/>
                            </IconButton>
                        </Tooltip>

                        <Typography variant="body2">
                            <IconButton color="secondary" size="small">
                                <AccountCircleSharpIcon/> 
                            </IconButton>
                            (You)
                        </Typography>
                    </CardActions>
                </Card>
            ))
        )}
        
        </div>
    );

}

export default Cards