# Grammarly API

> Great Writing, Simplified

[![Build Status][travis-badge]][travis]

## API

**URL**: https://grammarly-api.now.sh/api/check

### ?text=\${text}

Type: `string`<br />
Required

#### Example

```
curl -X GET \
  'https://grammarly-api.now.sh/api/check?text=The%20slaves%20were%20read-only%20copies%20of%20master.%20But%20not%20to%20worry,%20he%20was%20a%20cripple.' \
  -H 'Content-Type: application/json' \
```

## License

[MIT][license] © [Bu Kinoshita][author]

<!-- Definitions. -->

[travis-badge]: https://img.shields.io/travis/bukinoshita/grammarly-api.svg
[travis]: https://travis-ci.org/bukinoshita/grammarly-api
[license]: license
[author]: https://bukinoshita.com
