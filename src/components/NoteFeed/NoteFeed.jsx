import React from 'react';
import { Card  } from 'semantic-ui-react';
import NoteFeedItem from '../NoteFeedItem/NoteFeedItem';


export default function NoteFeed({allNotes, numPhotosCol,user  }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
            {allNotes.map((note) => {
                return(
                    <NoteFeedItem 
                        user={user}
                        note={note} 
                        key={note._id} 
                        />
                )
            })}
                    
        </Card.Group>
  
    )
}