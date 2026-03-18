import { Link } from "react-router-dom";
import { APP_PATHS } from "@/config/navigation";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Esta página não foi encontrada.</p>
        <p className="mb-6 text-sm text-muted-foreground">
          Talvez o caminho tenha mudado. Você pode voltar e continuar sua experiência com a
          FADARY.
        </p>
        <Link to={APP_PATHS.home} className="text-primary underline hover:text-primary/90">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
