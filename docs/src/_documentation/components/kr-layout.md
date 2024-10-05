---
---


<kr-layout hidden></kr-layout>

## Examples

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>
  <script slot="code" type="text/plain">
    <style>
      kr-layout > * {
        text-align: center;
      }
    </style>
    <kr-layout>
      <header slot="header">
        Header
      </header>

      <aside slot="menu">
        <ul>
          <li><a href="javascript: void 0;">Link 1</a></li>
          <li><a href="javascript: void 0;">Link 2</a></li>
          <li><a href="javascript: void 0;">Link 3</a></li>
          <li><a href="javascript: void 0;">Link 4</a></li>
        </ul>
      </aside>


      <div slot="main-header" style="background: lightpink;">Main header</div>
      <main>
        Lorem Ipsum Dolor.
      </main>

      <div slot="main-footer" style="background: lightpink;">Main Footer</div>

      <aside slot="aside">
        <p>Table of contents</p>
        <ul>
          <li>Chapter 1</li>
          <li>Chapter 2</li>
          <li>Chapter 3</li>
        </ul>
      </aside>

      <footer slot="footer">
        Footer
      </footer>
    </kr-layout>
  </script>
</light-preview>


## DSD Markup

```html
<!-- <kr-layout> DSD ->
<%= File.read("../exports/components/kr-layout/kr-layout.dsd.html").html_safe %>
```
