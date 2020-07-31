import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
      body: { id: 5, content: this.state.note },
    })
      .then((response) => {
        console.log("fsfs", response);
      })
      // .then(() => this.props.history.push(`/posts/${id}`));
  };

  render() {
    const { redirect } = this.state;
    console.log(this.props);
    

    return (
      <div className="CreateNote">
        <h1>Редактировать публикацию</h1>
        <input
          type="text"
          name="name"
          value={this.state.note}
          onChange={(event) => this.handleChangeNote(event.target.value)}
        />
        <button onClick={this.PostTasks}>Редактировать</button>
        <Link to="/">
          <button>x</button>
        </Link>
      </div>
    );
  }
}
export default withRouter(CreateNote);
