import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Principal from "./pages/layout/Principal";
import PageValidate from "./pages/validate/PageValidate";
import LandingPage from "./pages/landingPage/Index";
import DadosPrincipais from "./pages/layout/perfil/DadosPrincipais";
import SidebarPerfil from "./components/SidebarPerfil/SidebarPerfil";
import MeusVideos from "./pages/layout/perfil/MeusVideos";
import Pagamento from "./pages/pagamento/Pagamento";
import RedefinirSenha from "pages/auth/RedefinirSenha";
import EnviarCodigo from "pages/auth/EnviarCodigo";
import VisualFilme from "pages/layout/VisualFilme";
import { Toaster } from "components/ui/toaster";
import { useToast } from "components/ui/use-toast";
function App() {
  const teste = useToast();
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/enviarCodigo" element={<EnviarCodigo />} />
        <Route path="/redefinirSenha" element={<RedefinirSenha />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/VisualFilme" element={<VisualFilme />} />

        <Route path="/a/" element={<PageValidate />}>
          <Route index element={<Principal />} />
          <Route path="/a/perfil/" element={<SidebarPerfil />}>
            <Route path="dadosPrincipais" element={<DadosPrincipais />} />
            <Route path="meusVideos" element={<MeusVideos />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
