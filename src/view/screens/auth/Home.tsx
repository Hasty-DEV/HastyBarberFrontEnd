import { Link } from "react-router-dom";
import Icon from "@/view/assets/Icon.svg";
import { ROUTES } from "@/view/routes/Routes";
import { LANGUAGE } from "@/domain/language";

export function AuthPage() {
  return (
    <main className="authPageContainer flex flex-col items-center justify-center gap-y-4">
      <img
        src={Icon}
        alt="Ícone da página de autenticação"
        className="max-w-full h-auto"
        title="Design by Freepik"
        width={200}
        tabIndex={0}
      />
      <section aria-labelledby="authSectionTitle" className="max-w-full px-4 text-center flex flex-col gap-y-4 w-3/4">
        <article className="flex flex-col gap-y-2">
          <h1
            id="authSectionTitle"
            className="font-bold text-4xl text-center capitalize"
            tabIndex={0}
          >
            {LANGUAGE.authPage.title}
          </h1>
          <p className="font-semibold capitalize" tabIndex={0}>
            {LANGUAGE.authPage.subtitle}
          </p>
        </article>
        <article className="flex flex-col gap-y-4 items-center justify-center">
          <Link
            to={ROUTES.authPage.signIn()}
            className="w-full px-8 py-4 bg-slate-800 hover:bg-slate-900 hover:font-bold transition-all text-white rounded-sm hover:border-none capitalize"
            aria-label="Redirecionamento para Página de Login"
            tabIndex={0}
          >
            {LANGUAGE.authPage.button.signIn}
          </Link>
          <Link
            to={ROUTES.authPage.signUp()}
            className="w-full bg-white hover:bg-gray-100 hover:font-bold transition-all border px-8 py-4 font-semibold border-solid border-black capitalize"
            aria-label="Redirecionamento para Página de Registro"
            tabIndex={0}
          >
            {LANGUAGE.authPage.button.signUp}
          </Link>
          <Link
            to={ROUTES.app.home()}
            aria-label="Login Anônimo"
            tabIndex={0}
          >
            {LANGUAGE.authPage.button.anonymous}
          </Link>
        </article>
      </section>
    </main>
  );
}
