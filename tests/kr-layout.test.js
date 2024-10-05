import { html, fixture, assert } from "@open-wc/testing"
import "../exports/components/kr-layout/kr-layout-register.js"

suite('<kr-layout>', () => {
  test("Should render a component", async () => {
    const el = await fixture(html` <kr-layout></kr-layout> `);

    assert(el.matches(":defined"), `"${el.tagName.toLowerCase()}" element should be ":defined"`)
  })
})
