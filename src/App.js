import logo from './logo.svg';
import './App.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Passengers from './Passengers';
import PassengerID from './PassengerID';
import AddPassenger from './AddPassenger';
import Footer from './FooterComponents/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
   useRouteMatch,
  useParams
} from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     </header>
      <QueryClientProvider client={queryClient}>
      <PassengerID />
      <Passengers />
      <AddPassenger />
      </QueryClientProvider>
   
    {/* <Link to="/create-Passenger">Create Passenger</Link>
     <Switch>
       <Route > <AddPassenger /> </Route>
     </Switch> */}
      <Footer />
    </div>
    </Router>
  );  
}
export default App;
