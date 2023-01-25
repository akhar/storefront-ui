---
layout: ComponentLayout
hideBreadcrumbs: true
---
# LoaderCircular

The LoaderCircular is used when the loading progress can be determined.

<Generate />

## Props

| Prop name             | Type                       | Default value                 | Possible values                      |
|-----------------------|----------------------------|-------------------------------|--------------------------------------|
| `size`                |      VsfLoaderSize        | `VsfLoaderSize.lg`           | `xs`,`sm`,`base`,`lg`,`xl`,`2xl`,`3xl`,`4xl` |
| `screenReaderText`    |      string                | `loading`                     |                                      |

## Accessibility notes
It uses `aria-live` set to `polite` to allow screen reader to read the loading status. It can be changed by adding new value of this attribute to the component when it's used.
It is important to properly set `screenReaderText` for screen readers to read proper information when target component is loading. Default value is set to `loading`.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfLoaderCircular/VsfLoaderCircular.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfLoaderCircular/VsfLoaderCircular.tsx
<!-- end react -->