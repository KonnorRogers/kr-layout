import { BaseElement } from "../../../internal/base-element.js";
import { componentStyles } from "./kr-layout.styles.js";

const html = String.raw

/**
 * @customElement
 * @tagname kr-layout
 * @summary A small layout utility for quickly scaffolding sites.
 * @documentation https://konnorrogers.github.io/kr-layout/components/kr-layout
 * @status experimental
 * @since 0.0.1
 *
 * @event light-event-name - Emitted as an example.
 *
 * @slot skip-links - A place to put visually hidden links for things like skipping to main content.
 * @slot header - The header slot for things like navigation
 * @slot main-header - A header that will appear "inline" with the main content area.
 * @slot - The main content. The meat and potatos.
 * @slot main-footer - An inline footer with the main content area. This will appear "above the fold" if your main content does not cause an overflow.
 * @slot menu - This will appear on the left hand side of the page in LTR languages. This is a good place to provide sidebar navigation.
 * @slot aside - This will appear on the right hand side of the page in LTR languages.
 * @slot footer - This is a footer that will take up 100% width of the page and will appear "below the fold" of a page regardless of if main content overflows.
 * @slot dialog - This is a place to put any elements such as toasts, dialogs, etc. Anything which you would normally put at the end of the `<body>`. Generally this is no longer needed because of `popover` attributes.
 *
 * @csspart skip-links - Wrapper around skip-links slot
 * @csspart base - Base div which sets up the initial grid for header, body, footer
 * @csspart header - Wrapper around the header slot
 * @csspart main - Wrapper around the main slot
 * @csspart main-header - Wrapper around the main-header slot
 * @csspart body - Wrapper around the menu, main-content, and aside parts.
 * @csspart menu - Wrapper around the menu slot.
 * @csspart main-content - Wrapper around the default slot. This is the center of your page.
 * @csspart main-footer - Wrapper around the main-footer slot
 * @csspart aside - Wrapper around the aside slot
 * @csspart footer - Wrapper around the footer slot
 * @csspart dialog - Wrapper around the dialog slot
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class KrLayout extends BaseElement {
  static styles = componentStyles


  get disableSticky () {
    return this._disableSticky
  }

  /**
   * @param {null | string} val
   */
  set disableSticky (val) {
    this._disableSticky = val
    if (val == null) {
      this.removeAttribute("disable-sticky")
    }
    this.setAttribute("disable-sticky", String(val))
  }

  /**
   * @param {string} slot
   */
  createResizeObserver (slot) {
    return new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const contentBoxSize = entry.borderBoxSize[0];
          if (this.disableSticky.includes(slot)) {
            this.style.setProperty(`--${slot}-height`, `${contentBoxSize.blockSize}px`)
          }
        }
      }
    })
  }

  static get observedAttributes () {
    return [
      "disable-sticky"
    ]
  }

  /**
   * @param {string} name
   * @param {string | null} oldVal
   * @param {string | null} newVal
   */
  attributeChangedCallback (name, oldVal, newVal) {
    switch (name) {
      case "disable-sticky":
        this.disableSticky = newVal
        break;
    }
  }

  constructor () {
    super()
    /**
     * @type {null | string}
     */
    this._disableSticky = null

    this.headerResizeObserver = this.createResizeObserver("header");
    this.footerResizeObserver = this.createResizeObserver("footer");
    if (!this.shadowRoot) {
      this.shadowRoot = this.attachShadow({ mode: "open" })
      this.shadowRoot.innerHTML = /** @type {typeof KrLayout} */ (this.constructor).render()
    }
  }

  connectedCallback () {
    setTimeout(() => {
      this.header = this.shadowRoot?.querySelector("[part~='header']")
      this.footer = this.shadowRoot.querySelector("[part~='main-footer']")

      if (this.header) {
        this.headerResizeObserver.observe(this.header)
      }

      if (this.footer) {
        this.footerResizeObserver.observe(this.footer)
      }
    })
  }

  disconnectedCallback () {
    if (this.header) {
      this.headerResizeObserver.unobserve(this.header)
    }

    if (this.footer) {
      this.footerResizeObserver.unobserve(this.footer)
    }
  }

  static renderHTML () {
    return html`
      <div class="visually-hidden skip-links" part="skip-links">
        <slot name="skip-links">
        </slot>
      </div>

      <div class="base" part="base">
        <div class="header" part="header">
          <slot name="header"></slot>
        </div>

        <div class="body" part="body">
          <div class="menu" part="menu">
            <slot name="menu"></slot>
          </div>

          <div class="main" part="main">
            <div class="main-header" part="main-header">
              <slot name="main-header"></slot>
            </div>

            <div class="main-content" part="main-content"><slot></slot></div>

            <div class="main-footer" part="main-footer">
              <slot name="main-footer"></slot>
            </div>
          </div>

          <div class="aside" part="aside">
            <slot name="aside"></slot>
          </div>
        </div>

        <div class="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>

      <div part="dialog" class="dialog">
        <slot name="dialog"></slot>
      </div>
  `
  }

  static render () {
    return html`
      <!-- version: ${this.version} -->
      <style>
        ${this.styles}
      </style>

      ${this.renderHTML()}
    `
  }

  /**
   * Renders to declarative shadow dom.
   */
  static renderDSD() {
    return html`<template shadowrootmode="open">
  <!-- version: ${this.version} -->
  <style>
    ${this.styles.trim().split(/\n/).join("\n  ")}
  </style>

  <!-- renderHTML() -->
  ${this.renderHTML().split(/\n    /).join("\n").trim()}
</template>`
  }
}
