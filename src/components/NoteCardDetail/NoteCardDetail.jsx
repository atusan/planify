import React from 'react';
import { Card  } from 'semantic-ui-react';
import { List } from 'semantic-ui-react'


export default function NoteCardDetail({note}){
    
    return(
    <List>
    <List.Item>
      <List.Icon name='sticky note' />
      <List.Content>{note.title}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>{note.location}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='time' />
      <List.Content>
         {note.date} 
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='tasks' />
      <List.Content>
      {note.description}
      </List.Content>
    </List.Item>
  </List>
    )
}
   
