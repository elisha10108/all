import logo from './logo.svg';
import './App.css';
import AppHw from './comps_hw/appHw';
import AppDeadline from './deadlineComps/appDeadline';
import AppMarket from './marketComps/appMarket';
import AppBit from './bitApiComp/appBit';

function App() {
  return (
    <div className="App">
      <AppBit />
      {/* <AppMarket /> */}
      {/* <AppDeadline /> */}
      {/* <AppHw /> */}
    </div>
  );
}

export default App;
