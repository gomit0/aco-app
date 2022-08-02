const product = [
    {
      "id":1,
      "nombre":"Taladro inalambrico",
      "category":"inalambrico",
      "descripcion":"KIT TALADRO INALAMBRICO 10MM 12V 2BAT TP 810/12 K2",
      "precio":30,
      "imagen":"../img/herramientas/taladros/051848.jpg"
    },
    {
      "id":2,
      "nombre":"RotoMartillo", 
      "category":"cableado",
      "descripcion":"ROTOMARTILLO SDS PLUS 1500W 6 J RM 932M/25 K",
      "precio":80, 
      "imagen":"../img/herramientas/taladros/055058.jpg"
    },
    {
      "id":3,
      "nombre":"Sierra Caladora",
      "category":"cableado",
      "descripcion":"SIERRA CALADORA 400w SK 455/1", 
      "precio":40,
      "imagen":"../img/herramientas/sierra/049402.jpg"
    },
    {
      "id":4,
      "nombre":"Sierra Circular",
      "category":"inalambrico",
      "descripcion":"SIERRA CIRCULAR 6 1/2'; 18v SIN BAT SC 807/18", 
      "precio":40,
      "imagen":"../img/herramientas/sierra/054330.jpg"
    },
    {
      "id":5,
      "nombre":"Esmeril Angular",
      "category":"cableado",
      "descripcion":"ESMERIL ANGULAR 7'; 2300W AA 818/220", 
      "precio":50,
      "imagen":"../img/herramientas/esmeril/053707.jpg"
    },
    {
      "id":6,
      "nombre":"Bateria 18v",
      "category":"inalambrico",
      "descripcion":"BATERIA GLADIATOR 1,5 AMPERES 18v BAT 818-1.5", 
      "precio":30,
      "imagen":"../img/herramientas/baterias/053549.jpg"
    }
]

export const  getProducts =  new Promise ((resolve, reject) => {
      let condition = true
              setTimeout(() => {
                  if (condition){
                      resolve(product)
                  } else {
                      reject ("Error al Cargar los Productos")
                  }
              },2000 )
          
          })

export const getItem = (id)=>{
    const task = new Promise((resolve)=>{
        setTimeout(()=>resolve(product.find(select=>select.id === parseInt(id))),2000)
    })
    return task
}