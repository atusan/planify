import React, { useState } from 'react';

import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';

export default function AddNoteForm(props){

    const [invalidForm, setInvalidForm] = useState(true);
    const [state, setState] = useState({
        title:'',
        date: '',
        location: '',
        description: ''
      })

      function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }
      
      function handleSubmit(e){
          console.log(state,'this is sate from add note form')
          e.preventDefault()
          console.log('handleSubmit fired')
          props.handleAddNote(state);

      }


    return(
        <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
            <Form  autoComplete="off" onSubmit={handleSubmit}>
              <Form.Input
                  className="form-control"
                  name="title"
                  value={state.title}
                  placeholder="Title"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="date"
                  value={state.date}
                  placeholder="When"
                  onChange={handleChange} 
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
              <Button
                type="submit"
                className="btn"
              >
                ADD Note
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
  ); 
}