import Link from "next/link";

export default function PageHero({ title, lead, crumb, children }: { title: React.ReactNode; lead: string; crumb: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero sec-blue grid-bg">
      <div className="wrap">
        <nav className="crumbs m" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="page-title d">{title}</h1>
        <p className="page-lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
