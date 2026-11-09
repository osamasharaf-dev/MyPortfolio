import Link from "next/link";

export default function Logo({ size }: { size?: number }) {
  return (
    <Link href="/" className="brand" aria-label="OS, Osama Sharaf home page" style={size ? { fontSize: size } : undefined}>
      <span className="brand-os">OS</span>
      <i className="brand-dot" aria-hidden="true" />
    </Link>
  );
}
