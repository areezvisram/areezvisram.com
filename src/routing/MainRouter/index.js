import React from 'react';
import { Paper } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

const ItemOne = () => {
    return (
      <Paper>
        <div>Item 1</div>
      </Paper>
    );
  }

const ItemTwo = () => {
    return (
      <Paper>
        <div>Item 2</div>
      </Paper>
    );
  }

  const ItemThree = () => {
    return (
      <Paper>
        <div>Item 3</div>
      </Paper>
    );
  }
const MainRouter = () => {
    return (
        <Switch>
            <Route path="/about" component={ItemOne} />
            <Route path="/experience" component={ItemTwo} />
            <Route path="/projects" component={ItemThree} />
        </Switch>
    )
};

export default MainRouter;