import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import {  Grid } from 'semantic-ui-react'
import AddNoteForm from '../../components/AddNoteForm/AddNoteForm';

export default function AddNotePage({user, handleLogout,handleAddNote}){
    
  return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddNoteForm handleAddNote={handleAddNote}/>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}