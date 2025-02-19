function lonelyinteger(a: number[]): number {
    const count : Record<number,number> = {};
    for(let num of a){
        count[num] = (count[num]||0) + 1
        
    }
    for(let num of a){
        if(count[num]===1){
            return num;
        }
    }
    return -1;
}

const arr = [1,2,3,1,2];
console.log(lonelyinteger(arr));