import React from "react"
import { Switch, Route } from 'react-router-dom';
import AvatarGuidelines from './AvatarGuidelines';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
              component={AvatarGuidelines}
              exact
              path="/"
          />
        </Switch>
      </div>
    );
  }
}

export default App;
