
let dia = parseInt(prompt("Ingrese el dia en el que nacio"));
let mes = parseInt(prompt("Ingrese el mes en que nacio. Por favor utilice\n 1 para Enero\n 2 para Febrero\n 3 para Marzo y asi..."));

if((dia>=21 && mes===1)||(dia<=19 && mes===2))
    alert('Acuario');
else if((dia>=20 && mes===2)||(dia<=20 && mes===3))
    alert('Piscis');
else if((dia>=21 && mes===3)||(dia<=20 && mes===4))
    alert("Aries");
else if((dia>=21 && mes===4)||(dia<=21 && mes===5))
    alert('Tauro');
else if((dia>=22 && mes===5)||(dia<=21 && mes===6))
    alert('Geminis');
else if((dia>=21 && mes===6)||(dia<=23 && mes===7))
    alert('Cancer');
else if((dia>=24 && mes===7)||(dia<=23 && mes===8))
    alert('Leo');
else if((dia>=24 && mes===8)||(dia<=23 && mes===9))
    alert('Virgo');
else if((dia>=24 && mes===9)||(dia<=23 && mes===10))
    alert('Libra');
else if((dia>=24 && mes===10)||(dia<=22 && mes===11))
    alert('Escorpio');
else if((dia>=23 && mes===11)||(dia<=21 && mes===12))
    alert('Sagitario');
else if((dia>=22 && mes===12)||(dia<=20 && mes===1))
    alert('Capricornio');
else 
    alert("Fecha Ingresada Incorrecta");