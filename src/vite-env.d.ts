/// <reference types="vite/client" />

interface Window {
  vapiSDK: {
    run: (config: {
      apiKey: string;
      assistant: string;
      config?: {
        position?: string;
        offset?: string;
      };
    }) => void;
  };
}
