import { DamageSelectorProps } from "@/utils/interfaces";
import { createRoot } from "react-dom/client";
import { App } from "@/App";
import "./index.css";

if (import.meta.env.MODE !== "development") {
  // Handle development mode rendering
} else {
  window.DAMAGE_SELECTOR_API = {
    init: (options: DamageSelectorProps["options"]) => {
      const { selector } = options;
      if (selector) {
        const renderElement = document.querySelector<HTMLElement>(selector);
        if (renderElement) {
          createRoot(renderElement).render(<App options={options} />);
        }
      }
    },
  };
}

document.addEventListener("DOMContentLoaded", () => {
  window.DAMAGE_SELECTOR_API?.init({
    selector: "#root",
  });
});
