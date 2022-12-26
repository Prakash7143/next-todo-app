import React, { useEffect } from 'react'
import type { todoItemProps } from '../components/Form/Form';

const useLocalStorage = (todoList:todoItemProps[]) => {

  return useEffect(() => {
    if(todoList?.length) localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList?.length]);

}

export default useLocalStorage;