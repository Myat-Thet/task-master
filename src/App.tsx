import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import NewTodoComponent from './components/NewTodoComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
   
   
    <BrowserRouter>
     <NavbarComponent/>
        <Routes>
          <Route path="/home" element={<HomeComponent/>}/>
          <Route path='/new-task' element={<NewTodoComponent/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
  )
}
