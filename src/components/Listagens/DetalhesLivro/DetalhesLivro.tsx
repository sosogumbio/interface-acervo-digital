import { useEffect, useState, type JSX } from "react";
import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";
import { Tag } from "primereact/tag";
import { Divider } from "primereact/divider";
import { Message } from "primereact/message";
import LivroRequests from "../../../fetch/LivroRequests";
import type LivroDTO from "../../../dto/LivroDTO";
import { useNavigate } from "react-router-dom";

interface DetalhesLivroProps {
    id_livro: number;
}

function DetalhesLivro({ id_livro }: DetalhesLivroProps): JSX.Element {
    const [livro, setLivro] = useState<LivroDTO | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function buscarDados() {
            setLoading(true);
            setError(null);

            try {
                const dados = await LivroRequests.obterLivroPorId(id_livro);
                if (dados) {
                    setLivro(dados);
                } else {
                    setError("Livro não encontrado.");
                }
            } catch (err) {
                console.error("Erro ao carregar detalhes do livro:", error);
                setError("Ocorreu um erro ao buscar as informações do livro.");
            } finally {
                setLoading(false);
            }
        }

        buscarDados();
    }, [id_livro]);

    if (loading) {
        return (
            <Card className="shadow-4">
                <div className="flex flex-col gap-4">
                    <Skeleton width="60%" height="2rem" />
                    <Divider />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i}>
                                <Skeleton width="30%" className="mb-2" />
                                <Skeleton width="80%" height="1.5rem" />
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        );
    }

    if (error || !livro) {
        return (
            <div className="flex justify-center p-4">
                <Message severity="error" text={error || "Erro desconhecido."} />
            </div>
        );
    }

    return (
        <main className="bg-gray-200 flex-1 py-6 px-4">
            <Card title={livro.titulo} className="shadow-lg w-full max-w-4xl mx-auto p-6">
                <div className="flex flex-col gap-4">

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">ISBN</span>
                        <Tag value={livro.isbn} severity="info" />
                    </div>

                    <Divider />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-blue-600">Informações do Livro</h3>

                            <div>
                                <span className="text-xs text-gray-400">Autor</span>
                                <p>{livro.autor}</p>
                            </div>

                            <div>
                                <span className="text-xs text-gray-400">Editora</span>
                                <p>{livro.editora}</p>
                            </div>

                            <div>
                                <span className="text-xs text-gray-400">Ano</span>
                                <p>{livro.ano_publicacao}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Card>

            <div className="w-full max-w-4xl mx-auto mt-6">
                <button
                    className="w-full bg-slate-700 text-white py-3 rounded-md mb-2"
                    onClick={() => navigate(`/atualizar/livro/${livro.id_livro}`)}
                >
                    Editar Livro
                </button>

                <button
                    className="w-full bg-white text-black py-3 rounded-md"
                    onClick={() => navigate(`/lista/livros`)}
                >
                    Voltar
                </button>
            </div>
        </main>
    );
}

export default DetalhesLivro;