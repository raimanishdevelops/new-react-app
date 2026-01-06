import logo from './logo.svg';
import Welcome from './practice';
import Printabc, {PrintYahoo} from './Example1'; 
import Printsssss,{Printsdfsdfsdf} from './Example2'
import './App.css';

function App() {
  return (
<>
  <div className = "kuch"> 

      <div className="lovra">
      <Welcome />
    </div>

    <div className='lovra'>
    <Printabc />  
    <PrintYahoo />
    </div>

    <div class='lovra'>
    <Printsssss   />
    <Printsdfsdfsdf  />
    </div>

 


  </div>
    
</>    
  );
}

export default App;
