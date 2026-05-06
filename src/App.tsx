import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PHome from './pages/PHome/PHome'
import PLogin from './pages/PLogin/PLogin'
import PListagemAluno from './pages/PListagem/PListagemAlunos/PListagemAlunos'
import PListagemEmprestimo from './pages/PListagem/PListagemEmprestimo/PListagemEmprestimo'
import PListagemLivro from './pages/PListagem/PListagemLivros/PListagemLivros'
// import ProtectedRoute from './components/Rotas/ProtectedRoutes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PHome />} />
        <Route path='/login' element={<PLogin />} />
        <Route path='/lista/alunos' element={<PListagemAluno />} />
        <Route path='/lista/emprestimos' element={<PListagemEmprestimo />} />
        <Route path='/lista/livros' element={<PListagemLivro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App