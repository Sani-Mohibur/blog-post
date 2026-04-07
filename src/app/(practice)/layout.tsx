import Link from "next/link";

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <Link href="/development">Development</Link>
        <Link href="/marketing">Marketing</Link>
        <Link href="/sales">Sales</Link>
      </nav>

      {children}
    </div>
  );
}
