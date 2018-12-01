# Message Verification and Signing
Orecore implementation of galactrum message signing and verification. This is used to cryptographically prove that a certain message was signed by the holder of an address private key.

For more information refer to the [orecore-message](https://github.com/GAB5TER/orecore-message) github repo.

## Installation
Message Verification and Signing is implemented as a separate module and you must add it to your dependencies:

## Example
To sign a message:

```javascript
var privateKey = PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'GYfL3EfjUXKNQrXesCMSDZ2hCmexkD1XRK';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```
