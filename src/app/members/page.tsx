import Link from "next/link";
import React from "react";

function MembersPage() {
  return (
    <div className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <section className="container min-h-screen">
        <Link href="/members/abin">Abin</Link>
        <Link href="/members/maneesh">Maneesh</Link>
        <Link href="/members/karthikeyan">Karthikeyan</Link>
      </section>
    </div>
  );
}

export default MembersPage;
