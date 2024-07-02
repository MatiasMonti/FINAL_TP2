import SondaModelMemory from "./sondas.model.js";

class ModelFactory{

    static get(type){
        switch (type) {

            //EN CASO DE QUE TENGA UNA NUEVA PERSISTENCIA DEBERIA AGREGARLA EN OTRO CASE
            case 'MEM':
                console.log('Persistiendo en la memoria del servidor!')
                return new SondaModelMemory();
                break;

            default:
                console.log('Persistiendo en ... Default!')
                return new SondaModelMemory();
                break;
        }
    }

}

export default ModelFactory