import sha256 from 'crypto-js/sha256.js';


function generateHash(data){
    const stringData = JSON.stringify(data)
	const shaData = sha256(stringData)
    return shaData
}

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};
console.log(generateHash(data1))
console.log(generateHash(dataObject))
console.log(sha256(data1))