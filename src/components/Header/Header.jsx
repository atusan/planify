import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import "./Header.css";

export default function PageHeader({ user, handleLogout }) {
  return (
    <div>
      <Segment clearing className="page-header">
        <Header as="h2" floated="right">
          <Link style={{ color: "black" }} exact to="/notes/add">
            Add Plan
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link exact to="/notes" style={{ color: "black" }}>
            My Plans
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/" style={{ color: "black" }}>
            <Icon name="home"></Icon>
          </Link>
          <Link to="" style={{ color: "black" }} onClick={handleLogout}>
            Logout
          </Link>
        </Header>
        <Header as="h2" floated="left">
          <Link to={`/${user.username}`} style={{ color: "black" }}>
            <Image
              src={
                user.photoUrl
                  ? user.photoUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              avatar
            ></Image>
            Hello, {user.username}
          </Link>
        </Header>
      </Segment>
    </div>
  );
}
