import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Display from "./component/display";
import History from "./component/history";
import AddTrans from "./component/addTrans";

function App() {
  return (
    <Provider store={store}>
      <div className="App container z-depth-3">
      <h1 className="center-align red accent-3"> Expenses Tracker </h1>
        <div className="add-section">
          <AddTrans></AddTrans>
        </div>
        <div className="display-histroy-section">
          <Display></Display>
          <History></History>
        </div>
      </div>
    </Provider>
  );
}

export default App;
