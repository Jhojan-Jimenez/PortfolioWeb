import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const utilScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);

  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Puedes definir un umbral para la altura de la página
    const largePageHeightThreshold = 800;

    if (viewportHeight > largePageHeightThreshold) {
      if (elementHeight > 850) {
        const offset = -40;
        const scrollY = elementTop + offset;

        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });
      } else {
        const scrollY = elementTop - viewportHeight / 2 + elementHeight / 2;

        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });
      }
    } else {
      console.log("Página de altura normal, aplicando lógica original.");
      console.log(elementHeight);

      if (elementHeight > 700) {
        const offset = -40;
        const scrollY = elementTop + offset;

        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });
      } else {
        const scrollY = elementTop - viewportHeight / 2 + elementHeight / 2;

        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });
      }
    }
  }
};
