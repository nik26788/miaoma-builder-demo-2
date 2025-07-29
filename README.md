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
