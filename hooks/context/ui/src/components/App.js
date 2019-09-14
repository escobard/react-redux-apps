import React from "react";
import UserCreate from "./UserCreate"
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: 'english'}

  // this updates LanguageContext.value, due to the syntax on line 21
  onLanguageChange = language =>{
    this.setState({ language: language })
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate/>
        </LanguageContext.Provider>
      </div>
  )
  }
}

export default App;
