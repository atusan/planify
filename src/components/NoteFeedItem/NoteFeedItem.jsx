import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NoteFeedItem({ user, note }) {
  return (
    <Card key={note._id}>
      <Card.Content textAlign="left">
        <Card.Description>
          <Link to={{ pathname: "/notes/details", state: { note } }}>
            {note.title}
          </Link>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>{note.description}</Card.Description>
      </Card.Content>
    </Card>
  );
}
