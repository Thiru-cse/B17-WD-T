// import { Provider } from 'react-redux'
// import {operationStore} from './features/OperationStore'
// import DisplayReduxState from './components/DisplayReduxState';
// import UpdateReduxState from './components/UpdateReduxState';

import { Provider } from "react-redux";
import { productStore } from "./features/Example2ReduxOp/ProductStore";
import Card from "./components/Example2Redux/Card";

function App() {

  return (
    <>
      <h1>Redux</h1>
      {/* <Provider store={operationStore}>
        <DisplayReduxState />
        <UpdateReduxState />
      </Provider> */}

      {/* Example: 2 */}
      <Provider store={productStore}>
        <Card/>
      </Provider>

    </>
  );
}

export default App
