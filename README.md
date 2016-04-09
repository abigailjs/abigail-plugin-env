Abigail Env Plugin
---

<p align="right">
  <a href="https://npmjs.org/package/abigail-plugin-env">
    <img src="https://img.shields.io/npm/v/abigail-plugin-env.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/abigailjs/abigail-plugin-env">
    <img src="http://img.shields.io/travis/abigailjs/abigail-plugin-env.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/abigailjs/abigail-plugin-env/coverage">
    <img src="https://img.shields.io/codeclimate/github/abigailjs/abigail-plugin-env.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/abigailjs/abigail-plugin-env">
    <img src="https://img.shields.io/codeclimate/coverage/github/abigailjs/abigail-plugin-env.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/abigailjs/abigail-plugin-env">
    <img src="https://img.shields.io/gemnasium/abigailjs/abigail-plugin-env.svg?style=flat-square">
  </a>
</p>

No installation
---
> abigail built-in plugin

Usage
---

## switch to production
if turn this plugin, change the `NODE_ENV` to `production`.

```bash
abby build --env
# NODE_ENV was changed to "production".
```

## other environment
if specify a `value` for the plugin, it set `value` to the `NODE_ENV`.

```bash
abby build --env development
# NODE_ENV was changed to "development".
```

## replacing all
if specify a `options.full`, it set all values to `process.env`.

```bash
abby build --env.full.NODE_ENV 'foo' --env.full.port 59798
# process.env was changed using options.full.
```

## use `abigail.plugins.env` field in `package.json`

```js
{
  // ...
  "abigail": {
    "plugins": {
      // default disable
      "env": false

      // default "production"
      "env": true

      // default "development"
      "env": "development"

      // default: replacing all
      "env": {
        "enable": true,
        "full": {
          "NODE_ENV": "production",
          "port": 59798,
          "host": "berabou.me"
        }
      }
    }
  }
}
```

See also
---
* [abigailjs/abigail](https://github.com/abigailjs/abigail#usage)
* [abigailjs/abigail-plugin](https://github.com/abigailjs/abigail-plugin#usage)

Development
---
Requirement global
* NodeJS v5.10.0
* Npm v3.8.3

```bash
git clone https://github.com/abigailjs/abigail-plugin-env
cd abigail-plugin-env
npm install

npm test
```

License
---
[MIT](http://abigailjs.mit-license.org/)
