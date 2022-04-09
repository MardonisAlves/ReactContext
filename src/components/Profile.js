import React from "react";
import { UserContext } from "./context/UserProvider";

function Profile(props) {
    console.log(props.userDetails.username)
    return(
        <UserContext.Consumer>
              <h1>{props.userDetails.username}</h1>
        </UserContext.Consumer>
    )
  }

  export default Profile;