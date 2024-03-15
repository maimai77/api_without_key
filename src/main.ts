import "./style.css";
import { setupResponse } from "./response.ts";

const typescriptLogo = new URL("./typescript.svg", import.meta.url).href;
const viteLogo = new URL("/vite.svg", import.meta.url).href;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <pre id="response" style="text-align: left;"></pre>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupResponse(document.querySelector<HTMLButtonElement>("#response")!);
