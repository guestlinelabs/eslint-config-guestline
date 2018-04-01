# eslint-config-guestline

This package includes the shareable ESLint configuration used by [Guestline Scripts](https://github.com/guestlinelabs/scripts).<br>
Please refer to its documentation:

## Usage with Guestline Scripts

The easiest way to use this configuration is with [Guestline Scripts](https://github.com/guestlinelabs/scripts), which includes it by default.

**You don’t need to install it separately.**

## Usage Outside of Guestline Scripts

If you want to use this ESLint configuration in a project not built with Guestline Scripts, you can install it with following steps.

First, install this package, ESLint and the necessary plugins.

```sh
npm install --save-dev eslint-config-guestline babel-eslint@^7.2.3 eslint@^4.1.1 eslint-plugin-flowtype@^2.34.1 eslint-plugin-import@^2.6.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-react@^7.1.0
```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```js
{
  "extends": "guestline"
}
```

That's it! You can override the settings from `eslint-config-config` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

## Accessibility Checks

The following rules from the [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) plugin are activated:

* [accessible-emoji](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)
* [alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)
* [anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)
* [aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
* [aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
* [aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
* [aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)
* [aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
* [heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)
* [href-no-hash](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v5.1.1/docs/rules/href-no-hash.md)
* [iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
* [img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
* [no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)
* [no-distracting-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)
* [no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
* [role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
* [role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)
* [scope](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)

If you want to enable even more accessibility rules, you can create an `.eslintrc` file in the root of your project with this content:

```json
{
  "extends": ["guetsline", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```

However, if you are using [Guestline Scripts](https://github.com/guestlinelabs/scripts), any additional rules will only be displayed in the IDE, but not in the browser or the terminal.
