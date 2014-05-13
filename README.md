# Pirater

Pirater makes it really easy to interact with ThePirateBay.

Inspired by: https://github.com/clindsay107/Pirata

## Installation

Install using npm:
```sh
npm install pirater
```

## Usage

```javascript
var pirater = require('pirater');

pirater.search('Ubuntu', function(results) {
  console.log(results);
})

[
  {
    id: 10139279,
    title: 'Ubuntu 12.04',
    category: 303,
    url: 'http://thepiratebay.se/torrent/10139279',
    magnet: 'magnet:?xt=urn:btih:895649af5c8311d16a1...',
    seeders: 1,
    leechers: 2,
    uploader: {
      username: 'Linear',
      profileUrl: 'http://thepiratebay.se/user/Linear'
    },
    files: 1,
    comments: 0,
    hash: '4D753474429D817B80FF9E0C441CA660EC5D2450',
    size: 964
  }
  ...
]
```

## Configuration
The Pirate Bay has a tendency to switch domains. Because of this you might
need to change the domain you are querying against. You can alter the
`config.baseUrl` by setting the environentment variable `PIRATEBAY_HOST`.

## Contribute

* Fork it.
* Do your thing (preferably on a feature branch).
* Write a test that demonstrates that the bug was fixed or the feature works as expected.
* Send a pull request and bug me until I merge it!

## License

Pirater is available under the MIT license. See the LICENSE file for more info.
