const css = String.raw

export const componentStyles = css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  :host(:dir(rtl)) *,
  :host(:dir(rtl)) *:after,
  :host(:dir(rtl)) *:before {
    direction: rtl;
  }

  :host(:dir(ltr)) *,
  :host(:dir(ltr)) *:after,
  :host(:dir(ltr)) *:before {
    direction: ltr;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: block;
    box-sizing: border-box;
    min-height: var(--height);
    --height: 100vh;
    --height: 100dvh;

    --menu-width: auto;
    --main-width: 1fr;
    --aside-width: auto;

    /** This is a best guess. We'll attempt to calculate this with a resize observer. **/
    --header-height: 68.33px;
  }

  :host([variant="documentation"]) {
    --menu-width: 250px;
    --main-width: 105ch;
    --aside-width: auto;
  }

  :host([variant="documentation"])::part(body) {
    justify-content: center;
  }

  *, *:after, *:before {
    box-sizing: border-box;;
  }

  :host::part(base) {
    display: grid;
    /** Header, Main, Footer **/
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
    min-height: var(--height);
  }

  :host::part(header) {
    max-width: 100%;
    position: sticky;
    background: white;
    z-index: 1;
  }

  :is(.header, .aside, .menu, .footer) ::slotted(*) {
    height: 100%;
  }

  :is(.aside, .menu) ::slotted(*) {
    min-width: 100%;
    width: 100%;
    max-width: 100%;
  }

  :host::part(header) {
    top: 0px;
  }

  :host::part(body) {
    display: grid;
    /** Menu, Main, Aside **/
    grid-template-columns: minmax(0, var(--menu-width)) minmax(0, var(--main-width)) minmax(0, var(--aside-width));
    grid-template-rows: minmax(0, 1fr);
  }

  :host::part(aside),
  :host::part(menu) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    max-height: calc(var(--height) - var(--header-height));
    overflow: auto;
    position: sticky;
    top: var(--header-height);
    overscroll-behavior: contain;
  }

  :host::part(main) {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    /* main-header, main, main-footer */
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  }

  :host::part(footer) {}

  .skip-links {
    position: absolute;
    top: 0;
    left: 0;
    height: calc(var(--header-height, 48px) - 2px);
    width: 100vw;
    z-index: 4;
    background-color: inherit;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    place-items: center;
    text-align: center;
  }
`
