import React from "react";
import { Provider } from "react-redux";
import { Landing } from "./Components/Landing";
import { configStore } from "./state/store/configStore";

function App() {
  const myStore = configStore();
  return (
    <React.Fragment>

      <Provider store={myStore}>
        <Landing />
      </Provider>

    </React.Fragment>
  );
}

export default App;

//what we installed for project:-
// cors
// material ui
// react router dom
// axios
//react-redux
//redux


