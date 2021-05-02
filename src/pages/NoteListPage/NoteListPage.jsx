import React, { useState, useEffect } from 'react';
import {  Grid } from 'semantic-ui-react';
import "../../public/styles/styles.css";
import * as notesApi from '../../utils/notes-api';
import PageHeader from '../../components/Header/Header';
import NoteFeed from '../../components/NoteFeed/NoteFeed';

export default function NoteListPage({user, handleLogout}){

  const [allNotes, setAllNotes] = useState([]);
  
  


  async function getNotes(){ 
    try {
      const data = await notesApi.getAll();
      // console.log(data,'this is data')
      
      setAllNotes(data.notes)
    } catch(err){
  
      console.log(err, ' this is the error')
    }
  }

  useEffect(() => {
    
    getNotes()
  }, [])

  
  return (
    <div className="bg-wall">
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{maxWidth: 600}}>
            <NoteFeed
              user={user} 
              numPhotosCol={1} 
              allNotes={allNotes}/>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
    )
}