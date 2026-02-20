export default function Board({ children }) {
  return (
    <section className="scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-auto">
      {children}
    </section>
  );
}
