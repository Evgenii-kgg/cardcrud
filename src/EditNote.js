import React from "react";
import { Link, withRouter } from "react-router-dom";
import { netWorkService } from "./api";

class EditNote extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      note: this.title,
    }
  }
  

  handleChangeNote = (event) => {
    this.setState({
      note: event,
    });
  };

  id = this.props.match.params.id;
  title = this.props.match.params.title;

  PostTasks = () => {
    netWorkService({
      url: "posts",
      method: "POST",
      body: { id: `${this.id}`, content: this.state.note },
    })
      .then((response) => {
        console.log("EditNote", response);
      })
      .then(() => console.log(this.props.history.push(`/posts/${this.id}${this.state.note}`))
       );
  };

  ChangeTasks = () => {
    return this.props.history.push(`/posts/${this.id}${this.title}`);
  };

  render() {
    console.log(this.props);

    return (
      <div className="EditNote">
        <h1>Редактировать публикацию</h1>
        <h1>ID:{this.id}</h1>
        <input
          type="text"
          name="name"
          value={this.state.note}
          onChange={(event) => this.handleChangeNote(event.target.value)}
        />
        <button onClick={this.PostTasks}>Сохранить</button>
          <button onClick={this.ChangeTasks}>x</button>
      </div>
    );
  }
}
export default withRouter(EditNote);
