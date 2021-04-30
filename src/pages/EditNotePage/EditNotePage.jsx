import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';
import PageHeader from '../../components/Header/Header';

export default function EditNotePage(props){
    const location = useLocation();
    const data = location.state.note;
    console.log(data);
    const [state, setState] = useState(data);
    

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }
      
      function handleSubmit(e){
          console.log(state,'handle submit to send new state')
          e.preventDefault()
          console.log('handleSubmit fired')
          props.handleUpdateNote(state);

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
                Update Note
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
  ); 
}