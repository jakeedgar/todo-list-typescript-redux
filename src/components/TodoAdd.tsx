import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';

import { Store } from '../store/types'
import { addTodo, setNewTodos } from "../store/actions";

function TodoAdd() {
  const newTodo = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  return dispatch(addTodo())
}

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input 
      placeholder="New todo" 
      value={newTodo}
      onChange={(event: { target: { value: string; }; }) => dispatch(setNewTodos(event.target.value))}
      />
      <Button onClick={buttonHandler}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
