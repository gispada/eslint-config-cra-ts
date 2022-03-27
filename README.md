# eslint-config-cra-ts

Simple ESLint configuration meant to be used on a Create React App project, to extend `eslint-config-react-app`.

It contains a few personal tweaks and alphabetically sorted imports.

In the `package.json`:
```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "cra-ts"
    ]
  }
}
```
