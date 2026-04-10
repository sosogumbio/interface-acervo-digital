import {type JSX} from "react"; 

function ListagemAlunos(): JSX.Element{
    return (
        <main className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Alunos</h1>

                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-700 text-white">
                                <th className="px-6 py-4 text-left font-semibold">ID</th>
                                <th className="px-6 py-4 text-left font-semibold">RA</th>
                                <th className="px-6 py-4 text-left font-semibold">Nome</th>
                                <th className="px-6 py-4 text-left font-semibold">E-mail</th>
                                <th className="px-6 py-4 text-left font-semibold">Telefone</th>
                                <th className="px-6 py-4 text-left font-semibold">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">1</td>
                                <td className="px-6 py-4 text-gray-700">A123456</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Felisberto Frlis</td>
                                <td className="px-6 py-4 text-gray-700">felisberto@gmail.com</td>
                                <td className="px-6 py-4 text-gray-700">(16) 99265-4875</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Detalhes</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">2</td>
                                <td className="px-6 py-4 text-gray-700">B67892</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Tauane Souza</td>
                                <td className="px-6 py-4 text-gray-700">tauanesouza@gmail.com</td>
                                <td className="px-6 py-4 text-gray-700">(16) 99123-4568</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Detalhes</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">3</td>
                                <td className="px-6 py-4 text-gray-700">C98765</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Lucas Martins</td>
                                <td className="px-6 py-4 text-gray-700">lucas.martins@gmail.com</td>
                                <td className="px-6 py-4 text-gray-700">(16) 98765-4321</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Detalhes</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    ); 
}


export default ListagemAlunos;