import { listaCamiseta,listaShort,listaBotin,listaPelota } from "./practica.js";
let prodUsuario = 1;
const productos = [listaCamiseta,listaShort,listaBotin,listaPelota];
const productosEnCarrito = [];

let usuario = prompt("Bienvenido,ingrese su nombre");

function consultaProductosUsuario(producto){
    
let seleccionUsuario;
if(producto == null){
seleccionUsuario = parseInt(prompt("Hola"+" "+usuario+" "+"existen 4 articulos en stock, seleccione el numero deseado. Para ver el total del carrito, seleccione 5. Para salir, seleccione 6 \n1 Camiseta\n2 Short\n3 Botin\n4 Pelota\n5 Total Carrito\n6 Salir\n"));
}
else
{
seleccionUsuario = parseInt(prompt("Ingrese el numero de producto deseado\n1 "+producto[0].marca+" $"+producto[0].precio+"\n2 "+producto[1].marca+" $"+producto[1].precio+"\n3 "+producto[2].marca+" $"+producto
[2].precio+"\n4 "+producto[3].marca+" $"+producto[3].precio + "\nIngrese 5 para salir"));
guardarProductoEnCarrito(seleccionUsuario, producto);


}
return seleccionUsuario;
}

function validacionDeEleccion(prodUsuario){
 if(isNaN(prodUsuario) || (prodUsuario < 0 || prodUsuario > 6)){
 alert("Ingrese uno de los numeros indicados");
 return false;
}
return true;  
}

function guardarProductoEnCarrito(productoSeleccionado, listaDeProductos){
    console.log(productosEnCarrito)
    switch(productoSeleccionado){
        case 1:
            productosEnCarrito.push(listaDeProductos[0].precio);
            break;
            case 2:
                productosEnCarrito.push(listaDeProductos[1].precio);
                break;
                case 3:
                    productosEnCarrito.push(listaDeProductos[2].precio);
                    break;
                    case 4:
                        productosEnCarrito.push(listaDeProductos[3].precio);
                        break;
                        default: 
                        break;
    }
}

function seguirComprando(){
let sigueComprando = parseInt(prompt("¿Desea seguir comprando productos? Ingrese el número de la respuesta elegida \n1. Si\n2. No"))
return sigueComprando;
}

function sumaProductos(productosEnCarrito){
    let suma = 0;
    for (let i = 0; i < productosEnCarrito.length; i++) {
        console.log()
        suma += productosEnCarrito[i];
      }
      alert('El total del carrito es: ' + suma);
    }

while(prodUsuario < 4 && prodUsuario > 0){

prodUsuario = consultaProductosUsuario(null);
let validation = validacionDeEleccion(prodUsuario);
while(validation == true){
    switch(prodUsuario){
        case 1:
            prodUsuario = consultaProductosUsuario(productos[0]);        
            break;
            case 2:
            prodUsuario = consultaProductosUsuario(productos[1]);
            validation = false
            break;
            case 3:
            prodUsuario = consultaProductosUsuario(productos[2]);
            break;
            case 4:
            prodUsuario = consultaProductosUsuario(productos[3]);
            break;
            case 5:
            prodUsuario = sumaProductos(productosEnCarrito);
            break;
            default: 
            break;
    } 
    if(seguirComprando() == 2){
         validation = false
        }
}
}