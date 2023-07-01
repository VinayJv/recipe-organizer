import './App.css';
import { Landing } from './pages/Landing';
import { Route,Routes } from "react-router";
import { SinglePage } from './pages/SinglePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path="/:recipeName" element={<SinglePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
