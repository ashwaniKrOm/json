import './App.css'
import DataTable from './components/DataTable'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UpdateProduct from './components/UpdateProduct'
import CreateProduct from './components/CreateProduct'
import ReadProduct from './components/ReadProduct'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<DataTable/>}/>
        <Route path='add' element={<CreateProduct/>}/>
        <Route path='update/:id' element={<UpdateProduct/>}/>
        <Route path='read/:id' element={<ReadProduct/>}/>
    </Routes>
    </BrowserRouter>
      <br/>
    </>
  )
}

export default App
