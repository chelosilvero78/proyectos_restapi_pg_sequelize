import app from './app';
import '@babel/polyfill';

/*
//COMO OPTENER EL PUERTO DESDE EXPRESS
const aplicacion=await app.listen(4000);
    console.log('Server on port', aplicacion.address().port);

*/

async function main () {
    await app.listen(4000);
    console.log('Server on port 4000');
};

main();