"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessDetails } from "@/config/business";

export default function HomeLogoLink({
  className = "",
  imageClassName = "",
  width = 220,
  height = 75,
  priority = false,
  onNavigate,
}) {
  const pathname = usePathname();

  function handleClick(event) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    onNavigate?.();
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={className}
      aria-label="Sterling Crest Accountants homepage"
    >
      <Image
        src="/logo.svg"
        alt={businessDetails.legalName}
        width={width}
        height={height}
        className={imageClassName}
        priority={priority}
      />
    </Link>
  );
}
