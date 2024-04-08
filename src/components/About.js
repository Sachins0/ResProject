import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div className="m-5 p-3">
        <h1 className="font-bold">About us</h1>
        <p>Our application  helps in boosting the current situation of tourism industries including user to know nearby hotels,<br/> ask us to know places to visit ,weather, an other details.</p>
        <p>We had discovered a simplified way to find Restaurants,<br/> Hotels and attractions in your desired location and we can filter those choices using Ratings provided </p>
      </div>
    );
  }
}

export default About;
