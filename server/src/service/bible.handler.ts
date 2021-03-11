import fs from 'fs';
import {Bible} from '../models/Bible'

export const getAllBooks = (version: string):Promise<Bible['books']> => {
    return new Promise((resolve,rejects)=> {
        try {
            console.log("Biblia - Request Array of Books - init");
            const dataBase = dataBaseStr(version);
            var db_Biblia;
            try {
                db_Biblia = JSON.parse(fs.readFileSync(dataBase).toString());
            } catch (error) {
                db_SyntaxError(dataBase).then((result)=>{
                    resolve(result['books'] )
                }).catch((error)=>{
                    console.error('Error of syntax, not corrigido: ', error);
                });
            }
            console.log("Biblia - Request Array of Books = ", db_Biblia['books'].length);  
            resolve(db_Biblia['books']);
              
        } catch (err) {
            rejects(err);
        }
    })
    
}
export const getAllChapter = (version :string, book :string):Promise<Number> =>{
    return new Promise((resolve,rejects)=> {
        try {
            const dataBase = dataBaseStr(version)
            if(typeof(book) === 'string'){
                const db_Biblia = JSON.parse(fs.readFileSync(dataBase).toString());
               resolve(db_Biblia['biblia'][`${book}`].chapters.length)
            }
        } catch (error) {
            rejects(error);
        }
    })
    
    
}

export const getChapter = (version:string,book:string,chapter:Number):Promise<string[]> => {
    return new Promise((resolve,rejects)=> {
        try {
            const dataBase = dataBaseStr(version)
            if(typeof(book) !== 'string'){
                rejects('Biblia - o tipo do Parametro book nao é string ') 
            }else if(typeof(chapter) !== 'number' ) {
                rejects('Biblia - o tipo do Parametro chapter nao é number ')
            }else{
                const db_Biblia = JSON.parse(fs.readFileSync(dataBase).toString());

                resolve(db_Biblia['biblia'][`${book}`].chapters[chapter - 1])
            }
            
        } catch (error) {
            rejects(error);
        }
    })
    
}

const dataBaseStr = (version: string):string => {
    return `./src/bd/bible/json/pt_${version}.json`
}
// Fix Error
export const db_SyntaxError = (dataBase:string):Promise<Bible> => {
    return new Promise((resolve,rejects)=> {
        try {
            var db_corrigido: Bible;
            console.log('Biblia - Fix SyntaxError - init ')
            var db = fs.readFileSync(dataBase).toString().replace(/^\ufeff/g,"");
            db_corrigido = JSON.parse(db);
            fs.writeFileSync(dataBase, JSON.stringify(db_corrigido, null, 2));
            console.log('Biblia - Fix SyntaxError - finish ')
            resolve(db_corrigido);        
        } catch (error) {
            rejects(error)
        }
    })
    
}
// criate Collection
/*
export const setDataBaseOfBooks = () => {
    return new Promise((resolve,rejects) => {
        try {
            var data = fs.readFileSync(dataBase).toString().replace(/^\ufeff/g,"")
            var dataJSON = JSON.parse(data)
            var newDate = {}
            var books = []
            dataJSON.forEach(b => {
                newDate[`${b.name}`] = b 
                books.push({name: b.name, abbrev: b.abbrev})
            })
            var db = {biblia: newDate,books: books}
            fs.writeFileSync(dataBase, JSON.stringify(db, null, 2));
            resolve('Deu Certo')
        } catch (error) {
            rejects();
        }
    })
}
*/
