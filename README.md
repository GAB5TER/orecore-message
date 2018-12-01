# Galactrum Message Verification and Signing for Orecore

orecore-message adds support for verifying and signing galactrum messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main orecore repo](https://github.com/GAB5TER/orecore) for more information.

## Getting Started

```sh
npm install orecore-message
```

```sh
bower install orecore-message
```

To sign a message:

```javascript
var orecore = require('orecore-lib');
var Message = require('orecore-message');

var privateKey = orecore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'GYfL3EfjUXKNQrXesCMSDZ2hCmexkD1XRK';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/GAB5TER/orecore/blob/master/CONTRIBUTING.md) on the main orecore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/GAB5TER/orecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

