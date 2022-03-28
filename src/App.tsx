import './App.scss';
import 'dotenv/config';
import { AuthProvider } from './Context/AuthContext';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
