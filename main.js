let voto= 18;

if (voto < 18) {
    console.log('Insufficiente');
}else if(voto >= 18 && voto < 21){
    console.log('Sufficiente');
}else if(voto >= 21 && voto < 24){
    console.log('buono');
}else if(voto >= 24 && voto < 27){
    console.log('Distinto');
}else if(voto >= 27 && voto <= 29){
    console.log('ottimo');
}else if(voto == 30){
    console.log('eccellente');
}else{
    console.log('Voto non valido');
}

let v = 29;

switch (true) {
    case (v < 18):
        console.log("insufficiente");
        break;
    case (v >= 18 && v < 21):
        console.log("sufficiente");
        break;
    case (v >= 21 && v < 24):
        console.log("buono");
        break;
    case (v >= 24 && v < 27):
        console.log("distinto");
        break;
    case (v >= 27 && v <= 29):
        console.log("ottimo");
        break;
    case (v === 30):
        console.log("eccellente");
        break;
    default:
        console.log("Valore non valido");
}
