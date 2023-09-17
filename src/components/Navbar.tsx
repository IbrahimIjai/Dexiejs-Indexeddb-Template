import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 flex items-center justify-between p-2 lg:p-6">
      <Link to="/">Home</Link>
      <ul className="flex items-center gap-4 lg:gap-8">
        <CustomLink to="/todos">Todos</CustomLink>
        <CustomLink to="/sticky-notes">Sticky-Notes</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={`rounded-lg ${isActive ? "bg-gray-200 p-1 font-semibold transition-all ease-in-out duration-75" : ""}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
