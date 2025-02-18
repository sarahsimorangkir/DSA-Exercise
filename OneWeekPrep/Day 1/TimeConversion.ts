function timeConversion(s: string): string {
    // Write your code here
    let hours = parseInt(s.substring(0,2));
    let minutes = s.substring(3,5);
    let second = s.substring(6,8);
    let suffix = s.substring(8,10);
    
    if(suffix === 'AM'){
        if(hours === 12){
            hours=0;
        }
    }else{
        if(hours !== 12){
            hours += 12
        }
    }
    
    let hoursFormat = String(hours).padStart(2,'0');
    
    return `${hoursFormat}:${minutes}:${second}`

}

/*
Sample Input
07:05:45PM

Sample Output
19:05:45

*/