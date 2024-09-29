export const metadata = {
  title: "Reproductor",
};

export default function Reproductor({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
