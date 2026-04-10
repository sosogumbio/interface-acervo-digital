import type { JSX } from "react";
import Navegacao from "../../components/Navegacao/Navegacao";
import LoginForm from "../../components/FormLogin/FormLogin";
import Rodape from "../../components/Rodape/Rodape";

function PLogin(): JSX.Element {
    return (
        <>
            <Navegacao />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <LoginForm />
            </div>
            <Rodape />
        </>
    );
}

export default PLogin;