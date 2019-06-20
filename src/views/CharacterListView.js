import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import * as actionDispatchers from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
   this.props.fetch();
   console.log(this.props.fetching)
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return(<h1>LOADING...</h1>)
    }
    if(this.props.error) {
      return(<h1>{this.props.error}</h1>)
    }

    // if (this.props.error) {

    // }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.loading,
    error: state.charsReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  
    actionDispatchers
    /* action creators go here */
  
)(CharacterListView);
