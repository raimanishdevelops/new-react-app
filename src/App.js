import logo from "./logo.svg";
import Welcome from "./practice";
import PrintAbc, { PrintYahoo } from "./ExampleOne";
import Printsssss, { Printsdfsdfsdf } from "./Example2";
import Counter from "./ExampleButtonUpdate";
import { InputMirror } from "./InputMirror";
import { LoginStatus} from "./LoginStatus";
import ComponentMountedLog from "./ComponentMountedLog"
import Users from "./Users"
import {RenderList} from "./RenderList"
import FilterItems from "./FilterItems";

import ControllerParent from "./ControllerParent";
import "./App.css";
import ReplaceIndexKey from "./ReplaceIndexKey";

function App() {
  return (
    <>

      <div className="kuch">


        <div className="lovra">
          <ControllerParent />
        </div>
       
       
        {/* <div className="lovra">
          <FilterItems />
        </div> */}

        {/* <div className="lovra">
          <ReplaceIndexKey />
      </div> */}

        {/* <div className="user-css">
          <Users />
        </div>
         */}
        
        {/* <div className="lovra">
          <LoginStatus />
        </div>

        

       <div className="lovra">
          <ComponentMountedLog />
        </div>

      
        <div className="lovra">
          <InputMirror />
        </div> */}

        {/* <div className="lovra">
          <Welcome />
        </div>

        <div className="lovra">
          <PrintAbc />
          <PrintYahoo />
        </div>

        <div className="lovra">
          <Printsssss />
          <Printsdfsdfsdf />
        </div>

        <div className="lovra">
          <Counter />
        </div> */}
      </div>
    </>
  );
}

export default App;
