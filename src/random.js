export default function generateRandomString() {
    let result = '';
    const characters = '0123456789abcdefghijklmopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i <6; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }