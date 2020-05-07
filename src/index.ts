import "reflect-metadata"
import { createConnection, getManager, getConnection } from "typeorm"
import { Tema } from './entity/Tema'
import { Idioma } from './entity/Idioma'
import { Fabricante } from './entity/Fabricante'
import { Editorial } from './entity/Editorial'
import { temas, idiomas, fabricantes, editoriales } from './data.js'

createConnection().then(async (connection) => {  
    console.log('Creando tablas ...')
    await connection.dropDatabase();
    await connection.synchronize();

    const manager = getManager()
    
    console.log('Insertando datos ...')
    await getConnection().createQueryBuilder().insert().into(Tema).values(temas).execute()
    await getConnection().createQueryBuilder().insert().into(Idioma).values(idiomas).execute()
    await getConnection().createQueryBuilder().insert().into(Editorial).values(editoriales).execute()
    await getConnection().createQueryBuilder().insert().into(Fabricante).values(fabricantes).execute()
            
    const totalTemas = await manager.count(Tema)
    const totalIdiomas = await manager.count(Idioma)
    const totalEditoriales = await manager.count(Editorial)
    const totalFabricantes = await manager.count(Fabricante)
        
    console.log('Proceso finalidado!')    
    console.log(`${totalTemas} temas insertados.`)
    console.log(`${totalIdiomas} idiomas insertados.`)
    console.log(`${totalFabricantes} fabricantes insertados.`)
    console.log(`${totalEditoriales} editoriales insertadas.`)
    process.exit(0)

}).catch(error => console.log(error));
