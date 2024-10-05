import { version } from "./version.js";

// polyfill for SSR compiling templates
if (typeof HTMLElement === "undefined") {
  // @ts-expect-error
  globalThis.HTMLElement = class HTMLElement {};
}

/**
 * @customElement
 */
export class BaseElement extends HTMLElement {
  /**
   * @type {Record<string, typeof BaseElement>}
   */
  static dependencies = {};

  static version = version;

  /**
   * @type {string}
   */
  static baseName;

  /**
   * @param {string} [name=this.baseName] - Tag name
   * @param {CustomElementConstructor} [ctor=this] - Constructor to pass to define
   * @param {ElementDefinitionOptions} [additionalOptions]
   */
  static define(name = this.baseName, ctor = this, additionalOptions) {
    if (customElements.get(name)) {
      return;
    }

    customElements.define(name, ctor, additionalOptions);
  }

  constructor() {
    super();
    Object.entries(
      /** @type {typeof BaseElement} */ (this.constructor).dependencies,
    ).forEach(([name, ctor]) => {
      ctor.define(name);
    });
  }

  /**
   * Gets directionality of the element
   * @returns {"ltr" | "rtl"}
   */
  getTextDirection() {
    return this.matches(":dir(rtl)") ? "rtl" : "ltr";
  }
}
