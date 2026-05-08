import { useEffect, useState, type JSX } from "react";
import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";
import { Tag } from "primereact/tag";
import { Divider } from "primereact/divider";
import { Message } from "primereact/message";
import EmprestimoRequests from "../../../fetch/EmprestimoRequests";
import type EmprestimoDTO from "../../../dto/EmprestimoDTO";
import { useNavigate } from "react-router-dom";

interface DetalhesEmprestimoProps {
    id_emprestimo: number;
}

function DetalhesEmprestimo({ id_emprestimo }: DetalhesEmprestimoProps): JSX.Element {
    const [emprestimo, setEmprestimo] = useState<EmprestimoDTO | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
        useEffect(() => {
            async function buscarDados() {
                setLoading(true);
                setError(null);
                try {
                    const dados = await EmprestimoRequests.obterEmprestimoPorId(id_emprestimo);
                    if (dados) {
                        setEmprestimo(dados);
                    } else {
                        setError("Empréstimo não encontrado.");
                    }
                } catch (err) {
                    console.error("Erro ao carregar detalhes do empréstimo:", err);
                    setError("Ocorreu um erro ao buscar as informações do empréstimo.");
                }
                finally {
                    setLoading(false);
                }
            }

            buscarDados();
        }
        , [id_emprestimo]);

    if (loading) {
        return (
            <Card className="shadow-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <Skeleton shape="circle" size="4rem"></Skeleton>
                        <div className="flex-1">
                            <Skeleton width="60%" height="2rem" className="mb-2"></Skeleton>
                            <Skeleton width="40%"></Skeleton>
                        </div>
                    </div>
                    <Divider />

                    <div className="flex flex-col gap-2">
                        <Skeleton width="100%"></Skeleton>
                        <Skeleton width="100%"></Skeleton>
                        <Skeleton width="100%"></Skeleton>
                    </div>
                </div>
            </Card>
        );
    }

    if (error) {
        return ( 
            <div className="flex justify-center p-4">
                <Message severity="error" text={error} />
            </div>
        );
    }
    
    return (
        <main className="p-4">
            <Card className="shadow-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <Tag severity="info" className="text-lg font-bold">
                            Empréstimo #{emprestimo?.id_emprestimo}
                        </Tag>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-2">
                        <div>
                            <strong>Aluno:</strong> {emprestimo?.aluno.nome}
                        </div>
                        <div>
                            <strong>Livro:</strong> {emprestimo?.livro.titulo}
                        </div>
                        <div>
                            <strong>Data de Empréstimo:</strong> {new Date(emprestimo?.data_emprestimo || "").toLocaleDateString()}
                        </div>
                        <div>
                            <strong>Data de Devolução:</strong> {emprestimo?.data_devolucao ? new Date(emprestimo.data_devolucao).toLocaleDateString() : "Não devolvido"}
                        </div>
                    </div>
                </div>
            </Card>
            <div className="mt-4">
                <button
                    className="p-button p-button-outlined"
                    onClick={() => navigate(-1)}
                >
                    Voltar
                </button>
            </div>
        </main>


    ); 
}

export default DetalhesEmprestimo;