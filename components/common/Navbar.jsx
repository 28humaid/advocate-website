"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";


export default function Navbar({ logo, links }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* ── Main Navbar Bar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full bg-light1 shadow-sm">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">

          {/* Logo — left */}
          <Link href="/" className="flex shrink-0 items-center">
            {logo}
          </Link>

          {/* Desktop links — right (hidden on mobile) */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "relative text-sm font-medium tracking-wide transition-colors duration-200",
                    "text-dark1 hover:opacity-70",
                    // Underline indicator for active route
                    isActive(link.href)
                      ? "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-dark1"
                      : "",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger button — visible only on mobile */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center justify-center rounded-md p-2 text-dark1 transition-opacity hover:opacity-70 md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={2} />
          </button>
        </nav>
      </header>

      {/* ── Mobile Drawer Overlay ────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={[
          "fixed right-0 top-0 z-50 h-full w-72 bg-light1 shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-in-out md:hidden",
          drawerOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b border-dark1/10 px-5">
          <Link href="/" onClick={() => setDrawerOpen(false)} className="flex items-center">
            {logo}
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="rounded-md p-1.5 text-dark1 transition-opacity hover:opacity-70"
            aria-label="Close navigation menu"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col gap-1 px-4 pt-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className={[
                "rounded-lg px-4 py-3 text-base font-medium text-dark1 transition-colors duration-150",
                isActive(link.href)
                  ? "bg-dark1/10 font-semibold"
                  : "hover:bg-dark1/5",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}