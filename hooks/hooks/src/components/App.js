import React, { useState } from "react";

const App = () => {

  // the first argument is the getter, the second argument is the setter
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
      {resource}
    </div>
  );
};

export default App;
