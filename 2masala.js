let a = 963
let b = 487
let c = 847
let max = 0
let min = 0

if(a<b && a<c){
    min = a
}
else if(b<a && b<c){
    min = b
}
else{
    min = c
}
if(a<b && b<c){
    max = c
}
else if(b<a && c<a){
    max = a
}
else{
    max = b
}
console.log(max - min)