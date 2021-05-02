import React from "react";
import { Card } from "semantic-ui-react";
import { List } from "semantic-ui-react";

export default function NoteCardDetail({ note }) {
  let dateString = note.date;
  dateString = new Date(dateString).toUTCString();
  dateString = dateString.split(" ").slice(0, 4).join(" ");

  return (
    <List size={"big"}>
      <List.Item>
        <List.Content>Title: {note.title}</List.Content>
      </List.Item>
      <List.Item>
        <br />
        <List.Content>Location: {note.location}</List.Content>
      </List.Item>
      <List.Item>
        <br />
        <List.Content>Deadline: {dateString}</List.Content>
      </List.Item>
      <List.Item>
        <br />
        <List.Content>Description: {note.description}</List.Content>
      </List.Item>
    </List>
  );
}
