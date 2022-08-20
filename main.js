// 1
 function angkaRomawi(angka) {

    switch (angka) {
        case 1:console.log('I');
        break;
        case 2:console.log('II');
        break;
        case 3:console.log('III');
        break;
        case 4:console.log('IV');
        break;
        case 5:console.log('V');
        break;
        case 6:console.log('VI');
        break;
        case 7:console.log('VII');
        break;
        case 8:console.log('VIIII');
        break;
        case 9:console.log('IX');
        break;
        case 10:console.log('X');
        break;
    
        default:console.log('tidak ada');
            break;
    
}
    return angka
}
console.log(angkaRomawi);
//2
function negativePositif(arr) {
    let negative = []
    let positif = []
    for(let index in arr){
        if(arr[index]<0){
            negative.push(arr[index])
        }else{
            positif.push(arr[index])
        }
    }
    return [negative,positif]
}
console.log(negativePositif([-1,-100,-67,4,9,0]));

