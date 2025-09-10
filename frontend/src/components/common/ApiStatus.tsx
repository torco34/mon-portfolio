import { Loader2 } from "lucide-react"; // icono spinner
import type { ApiStatusProps } from "../ts/CommonType";

export const ApiStatus = ({ loading, error, children }: ApiStatusProps) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-600">
        <Loader2 className="h-8 w-8 animate-spin mb-2 text-orange-600" />
        <p>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-red-600">
        <p className="font-semibold">❌ {error}</p>
      </div>
    );
  }

  return <>{children}</>;
};
