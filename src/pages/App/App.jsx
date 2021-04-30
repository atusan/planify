import React, { useState } from 'react';
import { Route, Switch, Redirect,useHistory } from 'react-router-dom';
import './App.css';
import * as notesApi from '../../utils/notes-api';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Home from '../Home/Home';
import AddNotePage from '../AddNotePage/AddNotePage';
import NoteListPage from '../NoteListPage/NoteListPage';
import NoteDetailPage from '../NoteDetailPage/NoteDetailPage';
import EditNotePage from '../EditNotePage/EditNotePage';

function App(props) {
  console.log(userService)
  const [user, setUser] = useState(userService.getUser())
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  async function handleAddNote(addNewNote) {
    const newNote = await notesApi.create(addNewNote);
    setNotes([...notes, newNote]);
    history.push('/notes');
  }

  async function handleUpdateNote(updatedNoteData){
    const updatedNote = await notesApi.update(updatedNoteData);
    console.log(updatedNote,'this is updatedNote')
    const newNoteArray = notes.map(note => {
      return note._id === updatedNote._id ? updatedNote : note
    })
    console.log(newNoteArray, 'newNoteArray')
    setNotes(newNoteArray);
    history.push('/notes');
  }

  async function handleDeleteNote(noteId) {
    await notesApi.deleteOne(noteId);
    setNotes(notes.filter(note => note._id !== noteId));
    history.push('/notes');
  }


  function handleSignUpOrLogin(){

    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
  
             <Switch>
                <Route exact path="/">
                    <Home user={user} handleLogout={handleLogout}/>
                </Route>
                <Route exact path="/notes/add">
                <AddNotePage handleAddNote={handleAddNote} user={user} handleLogout={handleLogout}/>
              </Route> 
              <Route exact path="/notes">
                <NoteListPage user={user} handleLogout={handleLogout}/>
              </Route> 
              <Route exact path="/notes/details">
                <NoteDetailPage user={user} handleLogout={handleLogout} handleDeleteNote={handleDeleteNote}/>
              </Route> 
              <Route exact path="/notes/edit">
                <EditNotePage user={user} handleLogout={handleLogout} handleUpdateNote={handleUpdateNote}/>
              </Route> 
            </Switch>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;