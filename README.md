# Galactrum Message Verification and Signing for orecore-lib

orecore-message adds support for verifying and signing galactrum messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main orecore repo](https://github.com/GAB5TER/orecore-lib) for more information.

## Install

```sh
npm install orecore-message
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

Feel free to dive in! [Open an issue](https://github.com/GAB5TER/orecore-message/issues/new) or submit PRs.

Please see [CONTRIBUTING.md](https://github.com/galactrum/galactrum/blob/master/CONTRIBUTING.md) on the Galactrum repo for information about how to contribute.

## License

Code released under [the MIT license](LICENSE).
