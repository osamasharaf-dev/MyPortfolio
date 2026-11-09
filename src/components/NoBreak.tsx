export default function NoBreak({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i, a) => (
        <span key={i}>
          {w.includes("-") ? <span className="nw">{w}</span> : w}
          {i < a.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
