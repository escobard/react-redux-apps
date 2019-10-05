import React, { useState } from "react";

import ResourceList from "./ResourceList";

// base useState sample
const App = () => {

  // this is using basic array destructuring - https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // the first argument is the getter, the second argument is the setter
  // first argument is equivalent to this.state.property
  // second argument is equivalent to this.setState({ resource: 'posts' })
  // the useState declaration sets the default state for this.state.resource
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  );
};

export default App;
