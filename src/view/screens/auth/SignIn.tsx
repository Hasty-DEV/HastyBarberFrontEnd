import { Link } from "react-router-dom";
import Icon from "@/view/assets/Icon.svg";
import { ROUTES } from "@/view/routes/Routes";

export function SignIn() {
    return (
        <main className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center pt-8 gap-y-4">
            <img
                src={Icon}
                alt="Ícone da página de Login"
                className="max-w-full h-auto"
                title="Design by Freepik"
                width={200}
                tabIndex={0}
            />
            <h2 className="text-4xl font-bold">Bem-Vindo de Volta</h2>
            <form className="w-3/4 flex flex-col items-start justify-center pt-8 gap-y-4">
                <input
                    type="text"
                    placeholder="E-mail"
                    className="w-full border border-solid border-black p-4 rounded-md"
                    tabIndex={0}
                    required
                    aria-required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="w-full border border-solid border-black p-4 rounded-md"
                    tabIndex={0}
                    required
                    aria-required
                />
                <Link to="/" tabIndex={0} aria-label="Redirecionamento para Página de Esqueceu a Senha">Esqueceu a Senha?</Link>
                <button
                    type="submit"
                    className="w-full bg-slate-800 hover:bg-slate-950 text-white font-semibold hover:font-bold  border border-solid border-black p-4 rounded-md transition-all"
                    aria-label="Botão de Login"
                    tabIndex={0}
                >
                    Login
                </button>
                <Link to={ROUTES.authPage.signUp()} aria-label="Redirecionamento para Página de Registro" tabIndex={0}>Não tem Conta? Registra-se</Link>
                {/* <button type="button" className="w-full bg-white flex justify-center items-center gap-x-4 font-semibold hover:font-bold  border border-solid border-black p-4 rounded-md transition-all">
                    <FcGoogle size={24} />
                    <span>Continuar com o Google</span>
                </button> */}
            </form>
        </main>
    );
}
