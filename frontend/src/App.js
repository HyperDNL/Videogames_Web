import './App.css';
import { HomePage, CreateVideogameForm, NotFoundPage, ViewVideogamePage, EditVideogamePage } from './pages/Index'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { VideogameProvider } from './context/videogameContext'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='parent-container'>
      <div className='children-container'>
        <VideogameProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/newVideogame' element={<CreateVideogameForm />} />
              <Route path='/viewVideogame/:id' element={<ViewVideogamePage />} />
              <Route path='/editVideogame/:id' element={<EditVideogamePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </VideogameProvider>
      </div>
    </div>
  );
}

export default App;
