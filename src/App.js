import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Header from './container/header/Header';
function App() {
  return ( 
      <>
        <Header />
        <Routes>
            <Route path="*" element={ <Home />}/>
        </Routes>
      </>
  );
}

export default App;
