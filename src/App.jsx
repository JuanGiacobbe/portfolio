// importing react router
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// importing css
import './App.css';

// importing pages
import Main from './pages/main/Main';
import NotFound from './pages/not-found/NotFound';
import Landing from './pages/landing/Landing'



function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/contact' element={<Landing />} />

          
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
