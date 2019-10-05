import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  // useEffect replaces lifecycle methods, called every time the component is rendered
  useEffect(() => {
    // calls functions within the scope if props.resource's value changes
    fetchResource(resource);
  },
    // on render if the props.resource value changes (from previous render), fetchResource is called
    [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;
