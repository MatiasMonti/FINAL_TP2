import ModelFactory from "../models/DAO/Factory.js";
import config from "../../config.js";

class SondasServices {
    constructor() {
      this.model = ModelFactory.get(config.PERSISTENCE);
    }

    async getDatosSondas(){
        return await this.model.getDatosSondas();
    }
    
    async getDatosSondaByID(id){
        return await this.model.getDatosSondaByID(id);
    }
    
    async postDatosSonda(datosSonda){
        return await this.model.postDatosSonda(datosSonda);
    }    
  }
  
  export default SondasServices;