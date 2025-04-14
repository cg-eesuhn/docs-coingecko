# `docs-coingecko` — CoinGecko OpenAPI Specs (OAS) + Markdowns

Integrates ReadMe's [Bi-directional Sync](https://docs.readme.com/main/docs/bi-directional-sync) to keep ReadMe dashboard and GitHub backup in sync. It includes linting with [Redocly](https://redocly.com/docs/cli/commands/lint) and sync scripts to manage different formats as such:

- `reference/*.json` — Synced with ReadMe version in [docs.coingecko](https://docs.coingecko.com/)
- `reference-yml/*.yml` — Local version for easier editing

## Usage

- **Linting with [`redocly/lint`](https://redocly.com/docs/cli/commands/lint)**

    ```bash
    make lint
    ```
    ⚠️ Configure linting rules in [`.config/redocly.yaml`](./.config/redocly.yaml)

- **Syncing OAS changes between different formats**

    - Sync changes for **deployed ReadMe version in [docs.coingecko](https://docs.coingecko.com/)**
    <br> 📕 _Overwrite ReadMe version in [`reference/`](./reference/) with the local version in [`reference-yml/`](./reference-yml/)_
        ```bash
        make to-rdme
        ```

    - Sync changes for **local editing**
    <br> 📕 _Overwrite local version in [`reference-yml/`](./reference-yml/) with the ReadMe version in [`reference/`](./reference/)_
        ```bash
        make to-local
        ```

## Read More

- Edit OAS locally with [swagger-editor@next](https://github.com/swagger-api/swagger-editor/tree/next) or use the [online editor](https://editor-next.swagger.io/)
- [Redocly | Rulesets and Configuration](https://redocly.com/docs/cli/rules)
