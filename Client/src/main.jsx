import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Home from './views/Home';
import NotFound from './views/NotFound.jsx';
import MovieDetails from "./views/MovieDetails.jsx"

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/movie/:id' element={<MovieDetails />}></Route>
    <Route path='*' element={<NotFound />}></Route>
  </Routes>
  </BrowserRouter>
)