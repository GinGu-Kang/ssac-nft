const nftName = "So scary alpaca";
const description = "So scary alpaca, made by SSAC";
const hiddenImgUrl = "ipfs://QmcSm7vfLiumRDX3NTWYhmgeUmqJMFby3Ckoft9yP3pH3A";
const totalNum = 100;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}