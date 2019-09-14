import React from 'react'
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component{

  // needs to be called contextType or it won't work
  // static - adds a property to the Class, this is essentially creating Button.contextType = LanguageContext;
  // static here adds this.context to our class
  static contextType = LanguageContext;

  render(){

    // this.context now attached to the component due to syntax on line 9
    console.log('this is the context', this.context)
    return <button className="ui button primary">Submit</button>
  }
}

export default Button;