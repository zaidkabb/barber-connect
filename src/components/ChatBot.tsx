import { useEffect } from "react";

export const ChatBot = () => {
  useEffect(() => {
    // Load Vapi widget script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);

    // Create the vapi-widget element
    script.onload = () => {
      if (!document.querySelector("vapi-widget")) {
        const widget = document.createElement("vapi-widget");
        widget.setAttribute("public-key", "b03f1c67-af88-4007-888c-bf9787ddc1fd");
        widget.setAttribute("assistant-id", "b2c9f1e7-4a28-4938-9c3a-deb79252bbc5");
        widget.setAttribute("mode", "chat");
        widget.setAttribute("theme", "dark");
        widget.setAttribute("size", "full");
        widget.setAttribute("base-color", "#1a1814");
        widget.setAttribute("accent-color", "#c9a227");
        widget.setAttribute("button-base-color", "#c9a227");
        widget.setAttribute("button-accent-color", "#1a1814");
        widget.setAttribute("main-label", "Termin vereinbaren");
        widget.setAttribute("empty-chat-message", "Hallo! Wie kann ich Ihnen heute helfen?");
        document.body.appendChild(widget);
      }
    };

    return () => {
      // Cleanup
      const existingWidget = document.querySelector("vapi-widget");
      if (existingWidget) {
        existingWidget.remove();
      }
    };
  }, []);

  return null; // Widget is appended to body directly
};
