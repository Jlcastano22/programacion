function punto1() {
  let nombre = document.getElementById("nombre").value;
  let edad = parseInt(document.getElementById("edad").value);
  console.log(
    `Hola ${nombre} , tienes ${edad} años y el año que viene tendrás ${
      edad + 1
    } años`
  );
  let texto = "El resultado se muestra por consola";
  document.querySelector(".punto1").innerHTML = texto;
}

function punto2Triangulo() {
  let base = document.getElementById("baseTriangulo").value;
  let altura = document.getElementById("alturaTriangulo").value;
  let area = base * (altura / 2);
  let texto = `El area del triangulo es  ${area}`;
  document.querySelector(".areaTriangulo").innerHTML = texto;
}

function punto2Rectangulo() {
  let base = document.getElementById("baseRectangulo").value;
  let altura = document.getElementById("alturaRectangulo").value;
  let area = base * altura;
  let texto = `El area del Rectangulo es  ${area}`;
  document.querySelector(".areaRectangulo").innerHTML = texto;
}

function punto2Circulo() {
  let radio = document.getElementById("radioCirculo").value;
  let area = Math.PI * radio ** 2;
  let texto = `El area del Circulo es  ${area}`;
  document.querySelector(".areaCirculo").innerHTML = texto;
}

function punto3() {
  let numero = parseInt(document.getElementById("punto3Numero").value);
  let texto = "";
  for (let contar = 1; contar < numero + 1; contar++) {
    if (contar % 2 === 0) {
      texto += ` ${contar}- Es par <br>`;
    } else {
      texto += ` ${contar}- Es impar <br>`;
    }
  }
  document.querySelector(".punto3").innerHTML = texto;
}

function punto4() {
  let numero = parseInt(document.getElementById("punto4Numero").value);
  let texto = "";
  let divisores = 1;
  let primo = true;
  for (let contar = 2; contar < numero + 1; contar++) {
    if (numero % contar === 0) {
      divisores += `, ${contar}`;
      if (contar !== numero) {
        primo = false;
      }
    }
  }
  if (primo) {
    texto = `Los divisores de ${numero} son ${divisores} por lo que es un numero primo `;
  } else {
    texto = `Los divisores de ${numero} son ${divisores} por lo que no es un numero primo `;
  }

  document.querySelector(".punto4").innerHTML = texto;
}

function punto5() {
  let numero = parseInt(document.getElementById("punto5Numero").value);
  let texto = `El factorial de ${numero} es 1`;
  let factorial = 1;

  for (let contar = 2; contar < numero + 1; contar++) {
    texto += `* ${contar}`;
    factorial *= contar;
  }

  texto += ` que es igual a ${factorial}`;

  document.querySelector(".punto5").innerHTML = texto;
}

function punto6(){
    let numero = 0;
    let texto = "";
    let suma = 0;
    let contar=0
    while (suma<=50) {
        numero = parseInt(prompt("Ingrese un numero"));
        suma+=numero;
        contar+=1;
        texto=`${contar} numeros ingresados`;
        document.querySelector(".punto6").innerHTML = texto;
    }
    texto+= ` y la suma de estos es: ${suma}`;
    document.querySelector(".punto6").innerHTML = texto;
    suma=0;
}

function punto7(){
    let numeros = [1,2,4,5,7];
    let pares=[];
    let impares=[];
    let texto = "El resultado se muestra por consola";
    let numero=0;
    let random=0;
    for (let contar = 0; contar < numeros.length; contar++) {
        random=parseInt(Math.random()*10);
        numero=numeros[contar]* random;
        console.log(`${numeros[contar]} * ${random} = ${numero}`)

        if (numero%2===0) {
            pares.push(numero)
        } else {
            impares.push(numero)
        } 
    }
    console.log(`pares ${pares} `)
    console.log(`impares ${impares}`)

    document.querySelector(".punto7").innerHTML = texto;
    suma=0;
}

function punto8(){
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numero = parseInt(document.getElementById("punto8Numero").value);
    if (numero.length()<=8) {
        resultado=parseInt(numero/23)
        texto= `La letra es ${letras[resultado]}`;
        document.querySelector(".punto8").innerHTML = texto;
    } else {
        texto= `El dni debe contener como maximo 8 numeros`;
        document.querySelector(".punto8").innerHTML = texto;
    }
}

function punto9(){
    let palabra = document.getElementById("punto9Palabra").value;
    let vocales='aeiou';
    let consonantes='qwrtypsdfghjklzxcvbnmñ';
    let nvocales=0;
    let nconsonantes=0;
    let tamaño=0;

    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            nvocales++
        }   
        if (consonantes.includes(letra.toLowerCase())) {
            nconsonantes++
        }
        tamaño++
    }

    console.log(`longitud ${tamaño} `)
    console.log(`Numero de vocales ${nvocales} `)
    console.log(`Numero de consonantes ${nconsonantes} `)
    let texto = `El resultado se mostrara por consola`;
    document.querySelector(".punto9").innerHTML = texto;
}

function punto10(){
    let color = document.getElementById("punto10Palabra").value.toLowerCase();
    let colores= ["azul", "amarillo", "rojo", "verde", "rosa"];
    let texto;
    let es=false;

    for (const palabra of colores) {
        if (palabra===color) {
            es=true
        }
    }

    if (es){
        texto = `El color se encuentra entre los datos`;
    }else{
        texto = `El color no se encuentra entre los datos`;
    }
    document.querySelector(".punto10").innerHTML = texto;
}