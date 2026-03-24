/**
 * CNSM Baschet - Website Oficial
 * Componenta pentru link-uri de navigare
 * 
 * @module NavLink
 * @description Link de navigare cu suport pentru hash links (smooth scroll)
 */
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Proprietăți extinse pentru NavLink
 */
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  /** Clasa CSS pentru stilizare */
  className?: string;
  /** Clasa CSS pentru starea activă */
  activeClassName?: string;
  /** Clasa CSS pentru starea pending */
  pendingClassName?: string;
}

/**
 * Componenta NavLink - extinde NavLink-ul din React Router
 * Suportă atât route-uri normale cât și hash links pentru smooth scrolling
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    // Verifică dacă este un hash link (începe cu #)
    const isHashLink = typeof to === "string" && to.startsWith("#");

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isHashLink) {
        e.preventDefault();
        const targetId = to.slice(1); // Elimină #
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Apelează onClick original dacă este furnizat
      props.onClick?.(e);
    };

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) => {
          // Pentru hash links, verifică dacă hash-ul curent se potrivește
          const hashMatch = isHashLink && typeof window !== "undefined" && window.location.hash === to;
          return cn(className, (isActive || hashMatch) && activeClassName, isPending && pendingClassName);
        }}
        onClick={handleClick}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
