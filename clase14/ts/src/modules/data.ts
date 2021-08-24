import { leerMessages } from './app';
import Producto from '../class/producto';
import Message from '../class/message';

/**
 * DATOS A MANIPULAR
 */
const productos: Producto[] = []; //Array de productos
const dbIDs: number[] = []; //Array de los IDs de los productos
const lastID = { lastID: 0 }; //Ultimo ID de producto utilizado
const messages: Message[] = []; //Array de todos los mensajes del chat

//Se verifica si existen mensajes guardados
function checkMessagesOld() {
  let messageOld = JSON.parse(leerMessages());
  if (messageOld !== -1) {
    messages.push.apply(messages, messageOld);
  }
}

//Se inicializan los mensajes
checkMessagesOld();
export { productos, dbIDs, lastID, messages };
