// src/components/ScrollToTop.tsx
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Define props type
interface ScrollToTopProps {
	children?: ReactNode; // ReactNode allows JSX elements or plain text
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll for refresh or hash navigation
    const scrollBehavior = pathname === window.location.pathname ? "instant" : "smooth";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: scrollBehavior,
    });
  }, [pathname]);

  return <>{children}</> || null;
};

export default ScrollToTop;