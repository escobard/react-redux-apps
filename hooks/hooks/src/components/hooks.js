// we can fragment out hook logic like this, to re-use hook logic with other functional components
import {useEffect, useState} from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // request logic must be in a separate function, if request is being called by useEffect
  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  // useEffect replaces lifecycle methods, called every time the component is rendered
  useEffect(
    () => {
      // calls functions within the scope if props.resource's value changes
      fetchResource(resource);
    },
    // removing the second argument of useEffect, calls the scoped function endlessly
    // adding an empty array as the second argument, calls the scoped function once on mount
    // can add multiple arguments, useEffect checks for changes on all arguments
    // on render if the props.resource value changes (from previous render), fetchResource is called
    [resource]
  );

  // returns this.state.resources every time the function is invoked
  return resources;
};

export default useResources;
