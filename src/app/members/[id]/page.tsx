import React from "react";

function DynamicMembersPage({ params }: { params: { id: string } }) {
  return (
    <div className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <section className="container min-h-screen">{params.id}</section>
    </div>
  );
}

export default DynamicMembersPage;
