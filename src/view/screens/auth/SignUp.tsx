import { Link } from "react-router-dom";
import Icon from "@/view/assets/Icon.svg";
import { ROUTES } from "@/view/routes/Routes";

export function SignUp() {
    return (
        <main className="h-screen w-screen bg-gray-50 flex flex-col items-center justify-center gap-y-4">
            <img src={Icon} alt="Icon" className="max-w-full h-auto" width={200} title="Design by Freepik"/>
            <h2 className="text-4xl font-bold">Registre-se</h2>
            <form className="w-3/4 flex flex-col items-start justify-center gap-y-4 pt-4">
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
                <div className="flex items-center justify-between gap-x-4">
                    <input type="checkbox" id="terms" required tabIndex={0} />
                    <label htmlFor="terms">Aceito os termos e Condições</label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-slate-800 hover:bg-slate-950 text-white font-semibold hover:font-bold  border border-solid border-black p-4 rounded-md transition-all"
                    tabIndex={0}
                    aria-label="Botão de Registro"
                >
                    Registre-se
                </button>
                <Link to={ROUTES.authPage.signIn()} aria-label="Redirecionamento para Página de login">Já Tem Uma Conta? Faça Login</Link>
            </form>
        </main>
    )
}