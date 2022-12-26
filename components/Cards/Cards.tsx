import React, {useEffect, useState} from 'react'
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
import useLocalStorage from '../../hooks/useLocalStorage';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Cards = () => {
    const { todoList, setTodoList }= mainContext();
    const [initialLoad, setInitialLoad] = useState<boolean>(true);

    useEffect(() => {
        setInitialLoad(false);
    }, []);

    const deleteTodo = (id:Number) => {
        setTodoList(todoList.filter((todo:todoItemProps) => todo.id !== id))
    }
    useLocalStorage(todoList);

    return (
        <div
         className='cards-container'
        >
            {initialLoad && (<Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>)}
    
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
                            <Tooltip title="Due Date-Time">
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