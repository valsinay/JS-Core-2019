function main(input){

input.sort(function(a,b){
    return a.length - b.length || a.localeCompare(b);
});

console.log(input.join('\n'))
}
