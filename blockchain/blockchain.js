const SHA256 = require("crypto-js/sha256");

class Block{

constructor(index,data,previousHash){

this.index=index;
this.timestamp=Date.now();
this.data=data;
this.previousHash=previousHash;
this.hash=this.calculateHash();

}

calculateHash(){

return SHA256(
this.index +
this.previousHash +
this.timestamp +
JSON.stringify(this.data)
).toString();

}

}

class Blockchain{

constructor(){

this.chain=[this.createGenesisBlock()];

}

createGenesisBlock(){

return new Block(0,"Genesis Block","0");

}

getLatestBlock(){

return this.chain[this.chain.length-1];

}

addBlock(data){

const previous=this.getLatestBlock();

const block=new Block(
this.chain.length,
data,
previous.hash
);

this.chain.push(block);

return block.hash;

}

}

module.exports=new Blockchain();