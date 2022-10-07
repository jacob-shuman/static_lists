# static_lists
> If you would like to contribute, please feel free to follow the [contributing](#contributing) section below and submit a pull request.

This project is a random assortment of string/number lists that I've collected over the years. I've found them useful in various projects, so I've decided to share them. static_lists is built using [pnpm](https://pnpm.io/), [Astro](https://astro.build), [clsx](https://www.npmjs.com/package/clsx) and the [React](https://docs.astro.build/en/guides/integrations-guide/react) and [Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind) integrations from Astro. Any changes made are automatically deployed via netlify. 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `pnpm install`        | Installs dependencies                              |
| `pnpm dev`            | Starts local dev server at `localhost:3000`        |
| `pnpm build`          | Build your production site to `./dist/`            |
| `pnpm preview`        | Preview your build locally, before deploying       |
| `pnpm astro ...`      | Run CLI commands like `astro add`, `astro preview` |
| `pnpm astro --help`   | Get help using the Astro CLI                       |

## Contributing

If you would like to create a new list simply add a new json file to the data directory. The file must take the following structure:

```json
{
  "name": "...", // Required
  "description": "...", // Optional
  "values": ["...", "...", "..."] // Required
}
```
