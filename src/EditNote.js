import React, { useState, useEffect, useParams } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { netWorkService } from "./api";

class EditNote extends React.Component {
    constructor(props) {
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
          netWorkService({ url: "posts", method: "POST", body: {id: 0, content: this.state.note} })
          .then((response) => {
            console.log("EditNote", response);
          });
        };
  
    render() {
      console.log("", this.props);
      return (
        <div className="CreateNote">
            <h1>Редактировать публикацию</h1>
          <input
            type="text"
            name="name"
            value={this.state.note}
            onChange={(event) => this.handleChangeNote(event.target.value)}
          />
          <Link to="/posts/:id">
            <button onClick={this.PostTasks}>Опубликовать</button>
          </Link>
          <Link to="/posts/:id">
            <button >x</button>
          </Link>
        </div>
      );
    }
  }
  export default EditNote;
  