export const metadata = {
  title: "Fichas",
};

export default function FichasLayout({
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
