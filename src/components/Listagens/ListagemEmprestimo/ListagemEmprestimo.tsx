import { type JSX } from "react";

function ListagemEmprestimo(): JSX.Element {
    return (
        <main className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Empréstimos</h1>

                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-700 text-white">
                                <th className="px-6 py-4 text-left font-semibold">ID</th>
                                <th className="px-6 py-4 text-left font-semibold">Aluno</th>
                                <th className="px-6 py-4 text-left font-semibold">Livro</th>
                                <th className="px-6 py-4 text-left font-semibold">Data Empréstimo</th>
                                <th className="px-6 py-4 text-left font-semibold">Data Devolução</th>
                                <th className="px-6 py-4 text-left font-semibold">Status</th>
                                <th className="px-6 py-4 text-left font-semibold">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">1</td>
                                <td className="px-6 py-4 text-gray-700">João Silva</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Dom Casmurro</td>
                                <td className="px-6 py-4 text-gray-700">15/03/2026</td>
                                <td className="px-6 py-4 text-gray-700">29/03/2026</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Ativo</span>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">2</td>
                                <td className="px-6 py-4 text-gray-700">Maria Santos</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Grande Sertão: Veredas</td>
                                <td className="px-6 py-4 text-gray-700">10/03/2026</td>
                                <td className="px-6 py-4 text-gray-700">24/03/2026</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Atrasado</span>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">3</td>
                                <td className="px-6 py-4 text-gray-700">Pedro Oliveira</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">O Cortiço</td>
                                <td className="px-6 py-4 text-gray-700">01/03/2026</td>
                                <td className="px-6 py-4 text-gray-700">15/03/2026</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Devolvido</span>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">4</td>
                                <td className="px-6 py-4 text-gray-700">Ana Costa</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Quincas Borba</td>
                                <td className="px-6 py-4 text-gray-700">20/03/2026</td>
                                <td className="px-6 py-4 text-gray-700">03/04/2026</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Ativo</span>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
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

export default ListagemEmprestimo;
