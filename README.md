### pnpm + workspace

```bash
npm init -y
touch pnpm-workspace.yaml
mkdir apps packages
cd packages
mkdir core shared blocks
cd ../apps
mkdir runner
```

### create a vue project using vue-ts template

```bash
cd apps
pnpm create vite builder --template vue-ts
```

### create .gitignore/.prettierrc/.prettierignore/.editorconfig

```bash
cp apps/builder/.gitignore .
touch .prettierrc
touch .prettierignore
touch .editorconfig
```

### eslint configuration

- package.json

```json
{
    "script": {
        "lint": "eslint --fix"
    },
    "devDependies": {
        "eslint":"9.20.0"
        "vue-eslint-parser":"9.4.3",
        "@typescript-eslint/parser": "8.23.0",
        "@eslint/js": "9.20.0",
        "globals": "15.14.0",
        "eslint-plugin-simple-import-sort": "12.1.1"
    }
}
```

- eslint.config.js

```bash
# see detail file at current folder

```

### stylelint configuation

```json
{
    "script": {
        "lint:style": "stylelint \"{packages,apps}/**/*.{scss,css,vue}\" --fix"
    },
    "devDependies": {
        "stylelint": "16.14.1",
        "stylelint-config-standard": "37.0.0",
        "stylelint-config-standard-vue": "1.0.0"
    }
}
```

### cspell

- package.json

```json
{
    "script": {
        "spellcheck": "cspell lint --dot --gitignore --color --cache --show-suggestions \"(packages|apps)/**/*.@(html|js|cjs|mjs|ts|tsx|css|scss|md|vue)\""
    },
    "devDependies": {
        "cspell": "8.17.3"
    }
}
```

- cspell.json

```bash
# see detail file at current folder
```

- .cspell/custom-words.txt

### commitlint

- package.json

```json
{
    "script": {
        "commit": "git-cz"
    },
    "config": {
        "commitlint": {
            "path": "node_modules/cz-git"
        }
    },
    "devPendencies": {
        "@commitlint/cli": "19.7.1",
        "@commitlint/config-conventional": "19.7.1",
        "commitizen": "4.3.1",
        "cz-git": "1.11.0",
        "husky": "9.1.7"
    }
}
```

- commitlint.config.js

```bash
# see detail file at current folder
```

- husky

```bash
npx husky init
```

.husky/pre-commit

```bash
#!/usr/bin/env node
pnpm lint && pnpm spellcheck
```
