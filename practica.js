const listaProductos = [];

class Pelota{
    constructor(marca,tamaño,año,imagen,precio){
        this.marca = marca;
        this.tamaño = tamaño;
        this.año = año;
        this.img = imagen;
        this.precio = parseInt(precio);
        this.mostrarPelota = function(){
            console.log("Botin"+" "+this.marca+" \n"+this.tamaño+" "+"\nAño:"+" "+this.año+" "+this.img+"\nPrecio sin IVA: "+this.precio);
        }
    }
}
const pelotaAdidas = new Pelota("Adidas", "Futbol 11", 2004, "https://perufc.com/wp-content/uploads/2022/05/finalucl2007_1-298x298.jpg", 25000 );

const pelotaPuma = new Pelota("Puma","Futbol 11", 2023,"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/083999/01/fnd/ARG/fmt/png ",15000);

const pelotaNike = new Pelota("Nike", "Futbol 5", 2021,"https://http2.mlstatic.com/D_NQ_NP_613041-MLA54985970130_052023-O.webp ",5600);

const pelotaUmbro = new Pelota("Umbro","Futbol 5", 2008,"https://http2.mlstatic.com/D_NQ_NP_946446-MLA52555928757_112022-O.webp ",1800);


class Botin{
    constructor(marca,nombre,cesped,año,imagen,precio){
    this.marca = marca;
    this.nombre = nombre;
    this.cesped = cesped;
    this.año = año;
    this.img = imagen;
    this.precio = parseInt(precio);
    this.mostrarBotin = function(){
        console.log("Marca:"+this.marca+" "+"\nNombre:"+" "+this.nombre+" "+"\nPara"+" "+this.cesped+" "+this.img+"\nAño: "+this.año+" "+"\nPrecio sin IVA:"+" "+this.precio)
    }
}
}
const botinAdidas = new Botin("Adidas","Predator","Futbol 11",2014,"https://media.sanjuan8.com/p/b8097e21ffbdb969d5bd4cdb08f5c4f6/adjuntos/303/imagenes/007/473/0007473853/1200x675/smart/0015130766jpg.jpg ",25000);

const botinPuma = new Botin("Puma","Poison","Futbol 11",2021,"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/106463/01/fnd/EEA/fmt/png/Botas-de-f%C3%BAtbol-para-hombre-FUTURE-Z-1.1-Teaser-FG/AG ",65000);

const botinNike = new Botin("Nike","Total 90","Fytbol 5",2002," https://i.pinimg.com/originals/d2/86/b2/d286b2be3691a2ddecefc2fd39878f14.jpg",45000);

const botinUmbro = new Botin("Umbro","power","Futbol 5", 2012,"https://www.tienda.quonam.com.ar/media/catalog/product/cache/d38be127ecf06dfec35606e11d013cfe/1/0/1068-U-01FB002021-128-NEGRO_Y_BLANCO_1.jpg ",12000);


class Camiseta{
    constructor(marca,equipo,imagen,precio){
        this.marca = marca;
        this.equipo = equipo;
        this.img = imagen;
        this.precio = parseInt(precio);
        this.mostrarCamiseta = function(){
            console.log("Marca:"+" "+this.marca+" "+"\nEquipo"+" "+this.equipo+" "+this.img+" "+"\nPrecio sin IVA: "+this.precio)
        }
    }
}

const camisetaRealMadrid = new Camiseta("Adidas","Real Madrid","https://estaticos-cdn.sport.es/clip/3c97a80b-cc27-4ebf-a763-b443642a9b57_alta-libre-aspect-ratio_default_0.jpg ",35000);

const camisetaManchesterUnited = new Camiseta("Puma","Manchester United","https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-manchester-united-1636635187-74572.jpg?lm=1636635200 ",30000);

const camisetaBocaJuniors = new Camiseta("Nike","Boca Juniors","https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt02cec3d9030f39c9/615f8147dfb62209b2f5180d/6e333a50731e28603500a558e00ed3e6044d1377.jpg?auto=webp&format=pjpg&width=3840&quality=60 ",25000);

const camisetaArgentina = new Camiseta("Umbro","Argentina","https://www.templodelfutbol.cl/cdn/shop/products/20220923_233414_1024x1024_2x_84f97b6b-c605-4f38-aa86-3ed5ef3d8f82_1200x1200.jpg?v=1674313842 ",70000);


class Short{
    constructor(marca,equipo,imagen,precio){
        this.marca = marca;
        this.equipo = equipo;
        this.precio = precio;
        this.img = imagen;
        this.mostrarShort = function(){
        console.log("Marca:"+" "+this.marca+" "+"\nEquipo"+" "+this.equipo+" "+this.img+"\nPrecio sin IVA: "+this.precio);
        }

    }
}

const shortRealMadrid = new Short("Adidas","Real Madrid"," https://footdealer.co/wp-content/uploads/2023/06/Short-Real-Madrid-Domicile-2023-2024-3-768x768.jpg",20000);

const shortManchesterUnited = new Short("Puma","Machester United","https://images.footballfanatics.com/manchester-united/manchester-united-adidas-home-shorts-2023-24-kids_ss5_p-13384956+u-gdzykf2mpgcyijlilbih+v-7qxhk3zwryszsox8ihkd.jpg?_hv=2&w=600 ",18000);

const shortBocaJuniors = new Short("Nike","Boca Juniors","https://http2.mlstatic.com/D_NQ_NP_857954-MLA48364840286_112021-O.webp ",10000);

const shortArgentina = new Short("Umbro","Argentina","https://assets.adidas.com/images/w_600,f_auto,q_auto/199846676e464315abeeaed201163855_9366/Short_Uniforme_Alternativo_Argentina_22_Azul_HB9213_21_model.jpg ",50000);

listaProductos.push(pelotaAdidas,pelotaNike,pelotaPuma,pelotaUmbro,botinAdidas,botinNike,botinPuma,botinUmbro,camisetaRealMadrid,camisetaManchesterUnited,camisetaBocaJuniors,camisetaArgentina,shortRealMadrid,shortManchesterUnited,shortBocaJuniors,shortArgentina);


const listaCamiseta = [camisetaRealMadrid,camisetaManchesterUnited,camisetaBocaJuniors,camisetaArgentina];

const listaShort = [shortRealMadrid,shortManchesterUnited,shortBocaJuniors,shortArgentina];

const listaBotin = [botinAdidas,botinNike,botinPuma,botinUmbro];

const listaPelota = [pelotaAdidas,pelotaNike,pelotaPuma,pelotaUmbro];

export{listaCamiseta,listaShort,listaBotin,listaPelota};