import { Link } from "react-router-dom";
import { APP_PATHS } from "@/config/navigation";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6 py-16">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">404</h1>
        <p className="mb-4 text-lg text-muted-foreground sm:text-xl">Esta página não foi encontrada.</p>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
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
