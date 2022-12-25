import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { Button } from '@mui/material';
import { mainContext } from '../../store/context';


export interface todoItemProps {
    id: Number;
    todoItemName: String;
    deadLineDate: String | undefined;
    createdDate: String;
}

const Form = () => {
  const { todoList, setTodoList }= mainContext();
  useEffect(() =>{
    const data = localStorage.getItem("todoList");
    if(todoList?.length >= 0 && data){
      
      setTodoList(JSON.parse(data as string));
    }
  }, []);
  const [itemName, setItemName] =  useState<String>("");

  const [deadLineDate, setDeadLineDate] = useState<Dayjs | null>(
    dayjs(),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setDeadLineDate(newValue);
  };
 



  const addToDoList = () => {
    
    if(itemName === "") {
        alert("Please add a todo item");
    };
    const newData:todoItemProps = {
        id: new Date().getTime(),
        todoItemName: itemName,
        deadLineDate: deadLineDate?.toString(),
        createdDate: new Date().toLocaleString()
      }
    setTodoList((todoList:any) => [...todoList, newData])
    setItemName("");

  }

  const saveTodo = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  return (
    <Stack 
     direction={{ xs: 'column', sm: 'row' }}
     spacing={{ xs: 1, sm: 2, md: 4 }}
    >
        <TextField 
          name="itemName" 
          label="Enter ToDo Item"
          variant="outlined" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)}
        />
        
        <LocalizationProvider 
            dateAdapter={AdapterDayjs}
        >
          <DateTimePicker
            label="Select Due Date-Time"
            value={deadLineDate}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        
        <Button
          onClick={addToDoList}
          variant="contained"
        >
            Add To Do
        </Button>
        <Button
          onClick={saveTodo}
          variant="outlined"
        >
            Save
        </Button>
    
    </Stack>
  )
}

export default Form