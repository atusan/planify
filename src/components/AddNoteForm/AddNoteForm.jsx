import React, { useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

export default function AddNoteForm(props) {
  const [state, setState] = useState({
    title: "",
    location: "",
    description: "",
  });

  const [date, setDate] = useState(null);

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleDateChange(event, data) {
    console.log(data.value, "this is data.value");
    let dateString = data.value;
    dateString = new Date(dateString).toUTCString();
    dateString = dateString.split(" ").slice(0, 4).join(" ");
    console.log(dateString);
    setDate(dateString);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ...state,
      date,
    };
    props.handleAddNote(payload);
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "75vh" }}
      verticalAlign="middle"
      className="form-width"
    >
      <Grid.Column>
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              className="form-control"
              name="title"
              value={state.title}
              placeholder="Title"
              onChange={handleChange}
              required
            />
            <SemanticDatepicker
              onChange={handleDateChange}
              format="MM-DD-YYYY"
            />

            <Form.Input
              className="form-control"
              name="location"
              value={state.location}
              placeholder="Location"
              onChange={handleChange}
            />
            <Form.Input
              className="form-control"
              name="description"
              value={state.description}
              placeholder="Description"
              onChange={handleChange}
            />
            <Button type="submit" className="btn" color="brown">
              ADD Note
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
