import React from "react";
import UserCreate from "./UserCreate"
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
        {/*
          using Context.Provider value="value" - updates the Context's value to whatever Value is provided
          BIG GOTCHA - using this approach, creates a new Provider INSTANCE, which is only available to the nested elements within the Provider
         */}
          <UserCreate/>
        </LanguageStore>
      </div>
  )
  }
}

export default App;
