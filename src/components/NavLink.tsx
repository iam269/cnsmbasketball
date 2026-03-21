import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    // Check if this is a hash link (starts with #)
    const isHashLink = typeof to === "string" && to.startsWith("#");

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isHashLink) {
        e.preventDefault();
        const targetId = to.slice(1); // Remove the #
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Call original onClick if provided
      props.onClick?.(e);
    };

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) => {
          // For hash links, check if current URL hash matches
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
