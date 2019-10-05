import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = { resource: [] }

  async componentDidUpdate(prevProps){

    // very smart usage of prevProps to avoid pointless component updates!
    if (prevProps.resource !== this.props.resource){
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

      this.setState({ resource: response.data })
    }
  }

  render() {
    return <div>{this.state.resource.length}</div>;
  }
}

export default ResourceList;