// const crypto = require('crypto-js');
import { hash as _hash } from "crypto-js/sha256";

const target = "00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab";

for (let index = 0; index < 1; index++) {
    const hash = _hash(index)
    console.log(hash)
}