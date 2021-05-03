import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import {  Grid } from 'semantic-ui-react';
import './Home.css';
import '../../public/styles/styles.css';

export default function Home({user,handleLogout}){

    return (
      <div className="bg-wall">
        <Grid centered  style={{ height: "70vh" }}>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column as='h2' style={{ maxWidth: 600 ,color:'brown'}}>
          <br/><span className='quote'>“Good fortune is what happens when opportunity meets with planning.” – Thomas Edisono</span>
          </Grid.Column>
        </Grid.Row>
        
    </Grid>
    </div>

    )
}