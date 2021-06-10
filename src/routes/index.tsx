import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as views from "../views";
import { Paths } from './Paths';

interface IState {
  isSmallScreen: boolean;
}

class Routes extends React.Component<{}, IState> {
  constructor(props : any){
    super(props);

    this.state = { isSmallScreen: false };
}
  public render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact={true} path={Paths.HOME} component={views.HomeView}/>
            <Route path={`${Paths.DETAILS}/:id`} component={views.DetailsView}/>
            <Redirect to={Paths.HOME} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;