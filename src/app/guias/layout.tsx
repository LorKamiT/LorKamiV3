export const metadata = {
  title: "Guias",
};

export default function GuiasLayout({
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
