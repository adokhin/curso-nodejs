//usando el api de nodejs
const os = require('os');

//console.log(os.freemem());
console.log(os.platform());
console.log(os.release());
console.log('free memo: ', os.freemem(), ' bytes');
console.log('total memo: ' + os.totalmem(), ' bytes');
