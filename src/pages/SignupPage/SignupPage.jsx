import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';



export default function SignUpPage(props) {
  const [invalidForm, setValidForm] = useState(false);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const history = useHistory();


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }


  async function handleSubmit(e){
    // add this later
    e.preventDefault();

    // Photos have to be sent over as FormData
    // They send over the form in multiparts (multipe requests to the server)

    const formData = new FormData();
    formData.append('photo', selectedFile);

    // generating rest of form data by looping over the state object!
    for (let key in state){
      formData.append(key, state[key])
    }
    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin() 
      history.push('/') 

    } catch(err){
      console.log(err.message)
      setError(err.message)
    }
  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }
 

  return (
    <div className="bg-top-container ">
    <Grid textAlign='center' style={{ height: '115vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='brown' textAlign='center'>
          Organize your life with PLANIFY 
          </Header>            
            <Form autoComplete="off"  onSubmit={handleSubmit}>
            <Segment stacked>               
                <Form.Input                    
                  name="username"
                  placeholder="username"
                  value={state.username}
                  onChange={handleChange}
                  required
                />
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
                <Form.Input     
                  name="passwordConf"
                  type="password"
                  placeholder="Confirm Password"
                  value={ state.passwordConf}
                  onChange={handleChange}
                  required
                />
                <Form.Field> 
                    <Form.Input
                      type="file"
                      name="photo"
                      placeholder="upload image"
                      onChange={handleFileInput}
                    />      
                </Form.Field>
                <Button
                  type="submit"
                  className="btn"
                  disabled={invalidForm}
                >
                  <Button.Content style={{color: 'rgb(177,148,64)'}}>
                  Signup
                   </Button.Content>
               
              </Button>
              </Segment>
              {error ? <ErrorMessage error={error} /> : null}
            </Form>
           
        </Grid.Column>
      </Grid>
    </div>
  );   

}
