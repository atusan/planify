import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';



export default function LoginPage(props){

    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ]          = useState('')
    const [state, setState]       = useState({
        email: '',
        password: '',
    })

    const history = useHistory();

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }
    
    async function handleSubmit(e){
    e.preventDefault()
            
    try {
        await userService.login(state);
        // Route to wherever you want!
        props.handleSignUpOrLogin()
        history.push('/')
        
        } catch (err) {
        // Invalid user data (probably duplicate email)
        setError(err.message)
        }
    }

      
    

    return (
      <div className="bg-top-container">
          <Grid textAlign='center' style={{ height: '115vh'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='brown' textAlign='center'>
             PLANIFY
            </Header>
            <Form  autoComplete="off"  onSubmit={handleSubmit}>
               <Segment stacked>
                  <Form.Input
                    type="email"
                   
                    name="email"
                    placeholder="email"
                    value={ state.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={ state.password}
                    onChange={handleChange}
                    required
                  />
                <Button
                  color='rgb(177,148,64)'
                  fluid size='large'
                  type="submit"
                  className="btn"
                  disabled={invalidForm}
                >
                   <Button.Content style={{color: 'rgb(177,148,64)'}}>
                      Login
                   </Button.Content>
                  
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/signup'>Sign Up</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
            </Grid.Column>
          </Grid>
        </div>
      );
}

