import './App.css';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Auth from './Components/Auth';
import Todos from './Todos/Todos';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route path="/auth/:type" component={Auth}/>
        <Route path="/todos" component={Todos}/>
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
