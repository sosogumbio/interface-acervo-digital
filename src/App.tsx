import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PHome from './pages/PHome/PHome'
import PLogin from './pages/PLogin/PLogin'
import PListagemAlunos from './pages/PListagem/PListagemAlunos/PListagemAlunos'
import PListagemLivros from './pages/PListagem/PListagemLivros/PListagemLivros'
import PListagemEmprestimo from './pages/PListagem/PListagemEmprestimo/PListagemEmprestimo'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PHome />} /> 
        <Route path='/login' element={<PLogin />} />
        <Route path='/lista/aluno' element={<ProtectedRoute element={<PListagemAlunos />} />} />
        <Route path='/lista/livro' element={<ProtectedRoute element={<PListagemLivros />} />} />
        <Route path='/lista/emprestimo' element={<ProtectedRoute element={<PListagemEmprestimo />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
