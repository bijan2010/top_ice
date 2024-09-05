import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './Game';
import Mine from './Mine';
import Friends from './Friends';
import Earn from './Earn';
import Airdrop from './Airdrop';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Game} />
        <Route path="/mine" component={Mine} />
        <Route path="/friends" component={Friends} />
        <Route path="/earn" component={Earn} />
        <Route path="/airdrop" component={Airdrop} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;