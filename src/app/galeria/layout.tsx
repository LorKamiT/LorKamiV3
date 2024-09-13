export const metadata = {
  title: "Galeria",
};

export default function NavbarLayout({
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
