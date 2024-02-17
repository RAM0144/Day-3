// Return all the palindrome in an array

function findplindromes(words){
    let plindromes=[];
    for(let word of words){
        if(word===word.split("").reverse().join("")){
            plindromes.push(word);
        }
    }
    return plindromes;
}
let words=['mom','dog','god','madam','malayalam'];
let plindromes=findplindromes(words);
console.log(plindromes);