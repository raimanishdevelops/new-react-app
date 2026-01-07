import logo from "./logo.svg";
import Welcome from "./practice";
import PrintAbc, { PrintYahoo } from "./ExampleOne";
import Printsssss, { Printsdfsdfsdf } from "./Example2";
import Counter from "./ExampleButtonUpdate";

import { InputMirror } from "./InputMirror";

import { LoginStatus} from "./LoginStatus";
import "./App.css";

function App() {
  return (
    <>
      <div className="kuch">
        <div className="lovra">
          <LoginStatus />
        </div>
       

      
        <div className="lovra">
          <InputMirror />
        </div>

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
