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