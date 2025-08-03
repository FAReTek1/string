# string.gs

> String manipulation

This is a string library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is based on [the stdlib implementation](https://github.com/goboscript/std/), but it is designed to be used with [inflator](https://github.com/faretek1/inflator).

## Credits

- aspizu for original version in stdlib

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/string`

add string to your `inflator.toml` config:
```toml
[dependencies]
# ...
string = "https://github.com/FAReTek1/string"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/string`
2. `cd string`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
