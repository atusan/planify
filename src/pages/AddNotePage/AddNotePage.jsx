import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import "../../public/styles/styles.css";
import PageHeader from "../../components/Header/Header";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";

export default function AddNotePage({ user, handleLogout, handleAddNote }) {
  return (
    <div className="bg-wall">
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 600 }}>
            <AddNoteForm handleAddNote={handleAddNote} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
