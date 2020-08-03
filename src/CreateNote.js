import React from "react";
import {
  Link,
  withRouter,
} from "react-router-dom";
import { netWorkService } from "./api";


class CreateNote extends React.Component {
  constructor(props) {
    console.log(props);
    
    super(props);
    this.state = {
      note: "",
    };
  }

  handleChangeNote = (event) => {
    this.setState({
      note: event,
    });
  };

  PostTasks = () => {
    netWorkService({
      url: "posts",
      method: "POST",
      body: { id: 0, content: this.state.note },
    })
      .then((response) => {
        console.log("fsfs", response);
      })
      .then(() => this.props.history.push('/'));
  };

  render() {

    return (
      <div className="CreateNote">
        <input
          type="text"
          name="name"
          value={this.state.note}
          onChange={(event) => this.handleChangeNote(event.target.value)}
        />
        <button onClick={this.PostTasks}>Опубликовать</button>
        <Link to="/">
          <button>x</button>
        </Link>
      </div>
    );
  }
}
export default withRouter(CreateNote);
