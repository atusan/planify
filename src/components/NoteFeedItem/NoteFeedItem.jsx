import React from 'react';
import { Card,Image  } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NoteFeedItem({user,note}){
    return(
    <Card key={note._id}>
      <Card.Content textAlign='left'>
          <Image
              floated='left'
              size='large'
              avatar
              src='https://react.semantic-ui.com/images/wireframe/square-image.png'
          />
      </Card.Content>
      <Card.Content>
      <Card.Description>
      {note.title}
      </Card.Description>
      </Card.Content>
    </Card>
  );
}