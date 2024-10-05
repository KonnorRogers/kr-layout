import type KrLayout from "./kr-layout.js";

declare global {
  interface HTMLElementTagNameMap {
    "kr-layout": KrLayout;
  }
}

export {};
