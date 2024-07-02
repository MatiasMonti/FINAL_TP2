class SondaModelMemory {
    constructor() {
        this.datosSondas = [
            {
                id: 1,
                temperatura: 25,
                fecha: Date.now()
            },
            {
                id: 3,
                temperatura: 80,
                fecha: Date.now()
            }
        ];
    }

    async getDatosSondas() {
        return this.datosSondas.sort(s => s.fecha);
    }

    async getDatosSondaByID(id) {
        return this.datosSondas.find(s => s.id == id);
    }

    async postDatosSonda(datosSonda) {
        datosSonda.fecha = Date.now();
        this.datosSondas.push(datosSonda);
        return datosSonda;
    }
}

export default SondaModelMemory;