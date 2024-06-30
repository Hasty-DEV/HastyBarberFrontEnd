import * as R from "react-router-dom";
import { ROUTES } from "./Routes";
import { AuthPage } from "@/view/screens/auth/Home";
import { SignIn } from "@/view/screens/auth/SignIn";
import { SignUp } from "@/view/screens/auth/SignUp";

export function BrowserRouter() {
  return (
    <R.BrowserRouter>
      <R.Routes>
        <R.Route path={ROUTES.authPage.home()} element={<AuthPage />} />
        <R.Route path={ROUTES.authPage.signIn()} element={<SignIn />} />
        <R.Route path={ROUTES.authPage.signUp()} element={<SignUp />} />
        <R.Route path="*" element={<AuthPage />} />
      </R.Routes>
    </R.BrowserRouter>
  );
}
