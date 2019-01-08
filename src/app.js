import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>This is Expense Dashboard Page</div>
);

const AddExpensePage = () => (
  <div>This is Add expense Page</div>
);

const EditExpensePage = (props) => (
  <div>This is Edit expense Page. ID is { props.match.params.id }</div>
);

const HelpPage = () => (
  <div>This is Help Page</div>
);

const NotFoundPage = () => (
  <div>404 - <Link to='/'>Go home</Link></div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact/>
      <Route path='/create' component={AddExpensePage}/>
      <Route path='/edit/:id' component={EditExpensePage}/>
      <Route path='/help' component={HelpPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));