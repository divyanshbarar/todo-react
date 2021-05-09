import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Input, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Todo from "./component/Todo";
import db from "./firebase";
import firebase from 'firebase'
import ListAltIcon from '@material-ui/icons/ListAlt';


function App() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState('');
  useEffect(() => {


    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      settodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })


  }, []);
  const addTodo = (Event) => {
    Event.preventDefault()
    // if(input===''){
    //   alert('please add a task')
    //   return
    // }
    // things i do for an alert or as a brute force method genrally
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    settodos([...todos, input])
    setinput('')
  }
  return (
    <div className="App">
      <h1>Task Tracker</h1>

      <h1>Divyansh Barar</h1>
      <form>
        <FormControl>
          <InputLabel >write a task</InputLabel>
          <Input value={input} onChange={Event => setinput(Event.target.value)} />
          {/* <FormHelperText></FormHelperText> */}
        </FormControl>
        {/* things songha teach */}
        
        <Button disabled={!input} type="sumbit" onClick={addTodo} variant="contained" color="primary">
          Add TODO
</Button>
<ListAltIcon></ListAltIcon>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}


      </ul>
    </div>
  );
}

export default App;