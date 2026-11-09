import Link from "next/link";
import { Arrow } from "./Icons";

export default function NextPage({ href, label, kicker = "Next" }: { href: string; label: string; kicker?: string }) {
  return (
    <Link href={href} className="next-page">
      <span className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
        <span>
          <span className="m">{kicker}</span>
          <span className="d" style={{ display: "block", marginTop: 8 }}>
            {label}
          </span>
        </span>
        <span className="circle">
          <Arrow size={30} />
        </span>
      </span>
    </Link>
  );
}
