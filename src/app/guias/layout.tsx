export const metadata = {
  title: "Guias",
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
