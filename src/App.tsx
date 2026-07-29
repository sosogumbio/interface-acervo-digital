import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PHome from './pages/PHome/PHome'
import PLogin from './pages/PLogin/PLogin'
<<<<<<< HEAD
import PListagemAluno from './pages/PListagem/PLIstagemAluno/PListagemAluno'
import PListagemEmprestimo from './pages/PListagem/PListagemEmprestimo/PListagemEmprestimo'
import PListagemLivro from './pages/PListagem/PListagemLivro/PListagemLivro'
import PDetalhesAluno from './pages/PDetalhes/PDetalhesAlunos/PDetalhesAluno'
import PDetalhesLivro from './pages/PDetalhes/PDetalhesLivros/PDetalhesLivro'
import PDetalhesEmprestimo from './pages/PDetalhes/PDetalhesEmprestimos/PDetalhesEmprestimo'
// import ProtectedRoute from './components/Rotas/ProtectedRoutes'
=======
import PListagemAluno from './pages/PListagem/PListagemAlunos/PListagemAlunos'
import PListagemEmprestimo from './pages/PListagem/PListagemEmprestimo/PListagemEmprestimo'
import PListagemLivro from './pages/PListagem/PListagemLivros/PListagemLivros'
import PDetalhesAluno from './pages/PDetalhes/PDetalhesAluno/PDetalhesAluno'
import PDetalhesLivro from './pages/PDetalhes/PDetalhesLivro/PDetalhesLivro'
import PDetalhesEmprestimo from './pages/PDetalhes/PDetalhesEmprestimo/PDetalhesEmprestimo'
>>>>>>> features

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PHome />} />
        <Route path='/login' element={<PLogin />} />
        <Route path='/lista/alunos' element={<PListagemAluno />} />
        <Route path='/lista/emprestimos' element={<PListagemEmprestimo />} />
        <Route path='/lista/livros' element={<PListagemLivro />} />
        <Route path='/detalhes/aluno/:id_aluno' element={<PDetalhesAluno />} />
        <Route path='/detalhes/livro/:id_livro' element={<PDetalhesLivro />} />
        <Route path='/detalhes/emprestimo/:id_emprestimo' element={<PDetalhesEmprestimo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;