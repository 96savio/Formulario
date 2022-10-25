
import './App.css';
import RoutesApp from './routes';
import { AuthContextProvider } from './Components/context/AuthContext';
function App() {
 

  return (
    <div className="App">
     

<AuthContextProvider>
<RoutesApp/>
</AuthContextProvider>

 
    </div>
  );
}

export default App;
