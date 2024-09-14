import { Suspense } from "react";
export const metadata = {
  title: "Galeria",
};

export default function Galeria({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Cargando galería...</div>}>
      <section>
        <div>{children}</div>
      </section>
    </Suspense>
  );
}
