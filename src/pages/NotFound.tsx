import { Link } from "react-router-dom";
import { APP_PATHS } from "@/config/navigation";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="max-w-md text-center">
        <span className="mb-4 block text-[10px] tracking-[0.4em] text-primary uppercase">
          Página não encontrada
        </span>
        <h1 className="mb-6 text-6xl text-foreground md:text-8xl">404</h1>
        <div className="w-10 h-[1px] bg-primary mx-auto mb-8" />
        <p className="mb-10 text-sm leading-[1.82] text-muted-foreground font-light">
          Talvez o caminho tenha mudado. Você pode voltar e continuar sua experiência com a
          FADARY.
        </p>
        <Link to={APP_PATHS.home} className="btn-premium inline-flex text-foreground">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
