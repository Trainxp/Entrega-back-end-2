const fs = require ("fs");


class NuevoArchivo{

    constructor(nombreArchivo){
      this.nombreArchivo = nombreArchivo;
    }

    async save (object){
        const productos = await this.getAll();
        
        const producto = object;
        console.log(producto)
        await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(object),"utf-8")
    }


    async getById(id){

    }


    async getAll() {
        try{
            const file = await fs.promises.readFile(this.nombreArchivo, "utf-8")
            if (file){
                const files = JSON.parse(file);
                return files
            }else {
                return []
            }

        }catch (error){return error}

    }


}

const Archivo1 = new NuevoArchivo ("./archivo.txt");
Archivo1.getAll();
Archivo1.save({
    "id":"1",
    "title": "Coca-cola",
    "price" : "550",
    "thumbail": "emthy"
})