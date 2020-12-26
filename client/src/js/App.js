import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Display from './component/display';
import History from './component/history';
import AddTrans from './component/addTrans';

function App() {
  return (
    <Provider store = {store}>
      <div className="App container z-depth-3">
               
                <Display ></Display>
                <History></History>
                <AddTrans></AddTrans>
      </div>
    </Provider>
 
  );
}

export default App;
