import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListNote from "./ListNote";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Page404 from "./Pfge404";
import EditNote from "./EditNote";
import NoteProvider from './NoteProvider'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NoteProvider>
        <Router>
          <div>
            <div className="page">
              <Switch>
                <Route path="/" exact component={ListNote} />
                <Route path="/posts/new" component={CreateNote} />
                <Route
                  path="/posts/:id"
                  render={(props) => <Note {...props} />}
                />
                <Route path="/posts/edit" component={EditNote} />
                <Route path="*" component={Page404} />
              </Switch>
            </div>
          </div>
        </Router>
        </NoteProvider>
      </div>
    );
  }
}

export default App;
