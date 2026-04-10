import { type JSX } from "react";

function ListagemLivros(): JSX.Element {
    return (
        <main className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Livros</h1>

                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-700 text-white">
                                <th className="px-6 py-4 text-left font-semibold">ID</th>
                                <th className="px-6 py-4 text-left font-semibold">ISBN</th>
                                <th className="px-6 py-4 text-left font-semibold">Título</th>
                                <th className="px-6 py-4 text-left font-semibold">Autor</th>
                                <th className="px-6 py-4 text-left font-semibold">Editora</th>
                                <th className="px-6 py-4 text-left font-semibold">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">1</td>
                                <td className="px-6 py-4 text-gray-700">978-8535902778</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Dom Casmurro</td>
                                <td className="px-6 py-4 text-gray-700">Machado de Assis</td>
                                <td className="px-6 py-4 text-gray-700">Companhia das Letras</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Detalhes</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">2</td>
                                <td className="px-6 py-4 text-gray-700">978-8532511010</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Grande Sertão: Veredas</td>
                                <td className="px-6 py-4 text-gray-700">Guimarães Rosa</td>
                                <td className="px-6 py-4 text-gray-700">Nova Fronteira</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Detalhes</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">3</td>
                                <td className="px-6 py-4 text-gray-700">978-8595084788</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">O Cortiço</td>
                                <td className="px-6 py-4 text-gray-700">Aluísio Azevedo</td>
                                <td className="px-6 py-4 text-gray-700">Editora 34</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Atualizar</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Detalhes</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Deletar</a>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 text-gray-700">4</td>
                                <td className="px-6 py-4 text-gray-700">978-8532530789</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">Quincas Borba</td>
                                <td className="px-6 py-4 text-gray-700">Machado de Assis</td>
                                <td className="px-6 py-4 text-gray-700">Companhia das Letras</td>
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

export default ListagemLivros;
