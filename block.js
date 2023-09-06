const { genesis_info } = require('./genesis.js');

const cryptoHash = require('./crypto-hash.js');

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  static genesis() {
    return new this(genesis_info);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = new Date();
    const previousHash = lastBlock.currentHash;
    return new this({
      timestamp,
      previousHash,
      data,
      currentHash: cryptoHash(timestamp, previousHash, data),
    });
  }
}

module.exports = Block;
