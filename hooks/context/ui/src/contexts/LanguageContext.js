// contexts can be thought of as standalone reducers
import React from 'react'

// for readability
let defaultState = 'english'

// this is how you create a context object - creates a {} that we can use to store state
// this state can then be accessed by any elements that need to use it
// for ReBank, we should use contexts to store RESPONSE data, to use the RESPONSE data in different places
// enforce - contexts can only be used by Page Containers, to fuel Nested Containers / Components
// idea - ideally we would call a module, that would return data. This data would have a loading = false property when no REQUEST has been sent, and loading = true property when RESPONSE has been received
// we would use the module to handle refreshes + sharing of persisted data between pages.
export default React.createContext(
  // this is the default value of the context
  defaultState
)