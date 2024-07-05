import './App.css';
import HandleClick from './EventHandling/HandleClick';
import ParentComponent from './Props/Parent';


function App() {

  return (
    <div >
      <HandleClick/>
      <ParentComponent/>
    </div>
  );
}

export default App;
