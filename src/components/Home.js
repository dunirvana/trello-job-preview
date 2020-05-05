import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

import Button from "@material-ui/core/Button";
import TrelloService from '../services/TrelloService';
import FirebaseService from '../services/FirebaseService';

const trelloService = new TrelloService();
const firebaseService = new FirebaseService();

class Home extends Component {

  handleTeste = () => {

    console.log("handleTeste");

    var dataPromise = firebaseService.getEmpresas();
    dataPromise.then(querySnapshot => {

      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log('loop 1', doc.id, " => ", doc.data());

        
        firebaseService.getEmpresasDocs(doc.id);
    
      });      

      
    });

    //Promise
    //var dataPromise = trelloService.getListsOnBoard("TalmVtWz");
/*    var dataPromise = trelloService.getCardsOnList("5e1c677f84b36130168cb5ee");    
    dataPromise.then((data) => {
      
      console.log(data);
    })
    */
  };

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { classes, isLoggingOut, logoutError } = this.props;
    return (
      <div>
        <h1>This is your app's protected area.</h1>
        <p>Any routes here will also be protected</p>
        <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}

        <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleTeste}
            >
              Teste!
            </Button>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}
export default connect(mapStateToProps)(Home);
