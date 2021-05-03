import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../public/styles/styles.css";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header";

export default function EditNotePage(props) {
  const location = useLocation();
  const data = location.state.note;
  console.log(data, "this is data coming");
  const [state, setState] = useState(data);

  const [date, setDate] = useState(null);

  let dateString = state.date;
  const dateFullFormat = new Date(dateString);

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleDateChange(event, data) {
    console.log(data.value, "this is data.value");
    let dateString = data.value;
    setDate(dateString);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ...state,
      date,
    };
    props.handleUpdateNote(payload);
  }

  return (
    <div className="bg-wall">
      <Grid
        textAlign="center"
        style={{ height: "75vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 650 }}>
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
                value={dateFullFormat}
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
                Update Plan
              </Button>
              <Link to="/notes">Cancel</Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
