import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen w-full px-20 pb-[100px]">{children}</div>;
}

export default Layout;
