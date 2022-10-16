![banner](banner.svg)

[![netlify status badge](https://img.shields.io/netlify/032193b3-e66f-40f0-96c1-f52d73a28297?logo=netlify&style=for-the-badge)](https://www.netlify.com/)
[![powered by badge](https://img.shields.io/static/v1?label=Powered%20by&message=Astro&logo=astro&color=FF5D01&style=for-the-badge)](https://astro.build/)
[![styled with badge](https://img.shields.io/static/v1?label=Styled%20with&message=Tailwindcss&logo=tailwindcss&color=06B6D4&style=for-the-badge)](https://tailwindcss.com/)

> If you would like to contribute, please feel free to follow the [contributing](#contributing) section below and submit a pull request.

This project is a random assortment of string/number lists that I've collected over the years. I've found them useful in various projects, so I've decided to share them. static_lists is built using [pnpm](https://pnpm.io/), [Astro](https://astro.build), [clsx](https://www.npmjs.com/package/clsx) and the [React](https://docs.astro.build/en/guides/integrations-guide/react) and [Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind) integrations from Astro. Any changes made are automatically deployed via netlify.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `pnpm install`        | Installs dependencies                              |
| `pnpm w dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm w build`        | Build your production site to `./dist/`            |
| `pnpm w preview`      | Preview your build locally, before deploying       |
| `pnpm w astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm w astro --help` | Get help using the Astro CLI                       |

## Contributing

If you would like to create a new list simply add a new json file to the data directory. The file must take the following structure:

```json
{
  "name": "...", // Required
  "description": "...", // Optional
  "values": ["...", "...", "..."] // Required
}
```
