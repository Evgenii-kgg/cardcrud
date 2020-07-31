import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { netWorkService } from "./api";


class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      redirect: false,
    };
  }


  handleChangeNote = (event) => {
    this.setState({
      note: event,
    });
  };

    PostTasks = () => {
        netWorkService({ url: "posts", method: "POST", body: {id: 0, content: this.state.note} })
        .then((response) => {
          console.log("fsfs", response);
        })
        .then(() => this.setState({ redirect: true }))
      };

  render() {

    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/somewhere'/>;
     }

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
          <button >x</button>
        </Link>
      </div>
    );
  }
}
export default CreateNote;
