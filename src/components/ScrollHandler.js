import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollHandler() {
  const { pathname } = useLocation();
  const location = useLocation();


  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}


export default ScrollHandler;
