import React, { useState, useEffect } from 'react';
import {  Grid,Button, Icon } from 'semantic-ui-react';
import {useLocation,Link} from 'react-router-dom';
import * as notesApi from '../../utils/notes-api';
import PageHeader from '../../components/Header/Header';
import NoteCardDetail from '../../components/NoteCardDetail/NoteCardDetail';


export default  function NoteDetailPage(user,handleLogout){
    const { state: {note} } = useLocation();


    return(<Grid centered >
    <Grid.Row>
      <Grid.Column>
        <PageHeader user={user} handleLogout={handleLogout}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={{maxWidth: 450}}>
        <NoteCardDetail note={note} user={user} handleLogout={handleLogout}/>
      </Grid.Column>
    </Grid.Row>
    <Link to={{
                    pathname: '/notes/edit',
                    state: {note}
                    }}><Button icon>
    <Icon name='edit outline' />
  </Button></Link>
</Grid>

);
}