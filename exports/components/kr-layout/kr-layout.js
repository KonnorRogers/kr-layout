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
 * @slot - The default slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class KrLayout extends BaseElement {
  /**
   * @param {string} slot
   */
  createResizeObserver (slot) {
    return new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const contentBoxSize = entry.borderBoxSize[0];
          this.style.setProperty(`--${slot}-height`, `${contentBoxSize.blockSize}px`)
        }
      }
    })
  }

  constructor () {
    super()
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

  static render () {
    return html`
      <!-- version: ${this.version} -->
      <style>
        ${componentStyles}
      </style>
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

  /**
   * Renders to declarative shadow dom.
   */
  static compile() {
    return html`<template shadowrootmode="open">${this.render()}</template>`
  }
}
