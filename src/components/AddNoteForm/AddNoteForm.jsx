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

  function handleDateChange(event,data) {
    setDate(data.value) 
  }




  function handleSubmit(e) {
    console.log(state, "this is sate from add note form");
    e.preventDefault();
    console.log("handleSubmit fired");
    const payLoad = {
      ...state,
      date
    }
    console.log(payLoad)
    props.handleAddNote(payLoad);
  }

  return (
    <Grid textAlign="center" style={{ height: "25vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
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
            <Button type="submit" className="btn">
              ADD Note
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
