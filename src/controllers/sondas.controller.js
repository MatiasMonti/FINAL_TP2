import SondasServices from "../services/sondas.service.js"
const sondas = [1,2,3,4,5];
const temperaturaMinina = -20;
const temperaturaMaxima = 100;
const service = new SondasServices();


async function getDatosSondas(req, res){    
    try {
        const respuesta = await service.getDatosSondas();

        return res.status(200).json(respuesta);
    } catch (error) {
        return res.status(500).json({ errorMsg: "Ups, algo salió mal, intente luego" });
    }
}

async function getDatosSondaByID(req, res){
    try {
        const { id } = req.params;

        const respuesta = await service.getDatosSondaByID(id);

        return res.status(200).json(respuesta);    
    } catch (error) {
        return res.status(500).json({ errorMsg: "Ups, algo salió mal, intente luego" });
    }
}

async function postDatosSonda(req, res){
    try {
        const datosSonda = req.body;
        const { id, temperatura } = req.body;

        if (!id || typeof id !== 'number' || isNaN(id)) {
            return res.status(400).json({ errorMsg: "datos no válidos" });
        }
        if (!temperatura|| typeof id !== 'number' || isNaN(id)) {
            return res.status(400).json({ errorMsg: "datos no válidos" });
        }
        if(temperatura < temperaturaMinina || temperatura > temperaturaMaxima ){
            return  res.status(400).json({ errorMsg: "datos no válidos" });
        }
        if(!sondas.includes(id)){
            return  res.status(400).json({ errorMsg: "Número de sonda incorrecto" });
        }
        const respuesta = await service.postDatosSonda(datosSonda);

        return res.status(201).json(respuesta);

    } catch (error) {
        return res.status(500).json({ errorMsg: "Ups, algo salió mal, intente luego" });
    }
}

export default {
    getDatosSondas,
    getDatosSondaByID,
    postDatosSonda,
}