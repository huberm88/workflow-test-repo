const fs = require('fs');

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const randomString = generateRandomString(10);
const jsonString = JSON.stringify({ randomString });

fs.writeFileSync('randomString.json', jsonString);
console.log('Random string generated and saved to randomString.json:', randomString);
