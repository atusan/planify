import React, { useState, useEffect } from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
import { useLocation, Link } from "react-router-dom";
import * as notesApi from "../../utils/notes-api";
import "../../public/styles/styles.css";
import PageHeader from "../../components/Header/Header";
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import NoteCardDetail from "../../components/NoteCardDetail/NoteCardDetail";

export default function NoteDetailPage({
  user,
  handleLogout,
  handleDeleteNote,
}) {
  const {
    state: { note },
  } = useLocation();

  return (
    <div className="bg-wall">
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {/* <Button icon onClick={() => handleDeleteNote(note._id)}>
            <Icon name="delete" />
          </Button> */}
          <RemoveButton handleDeleteNote={handleDeleteNote} note={note}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 600 }}>
            <NoteCardDetail
              note={note}
              user={user}
              handleLogout={handleLogout}
            />
          </Grid.Column>
        </Grid.Row>

        <Link
          to={{
            pathname: "/notes/edit",
            state: { note },
          }}
        >
          <Button icon>
            <Icon name="edit outline" />
          </Button>
        </Link>
      </Grid>
    </div>
  );
}
