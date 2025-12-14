const prompt = require('prompt-sync')();




function christmasSong(){

let count = true

while(count){


console.log(" Welcome to the best App for the Lyrics of the song 'Twelve Days Of Christmas' ");

let menu = `

1. First Day
2. Second Day
3. Third Day
4. Fourth Day
5. Fifth Day
6. Sixth Day
7. Seventh Day
8. Eighth Day
9. Ninth Day
10. Tenth Day
11. Eleventh Day
12. Twelfth Day
0. Exit program

`;
console.log(menu);


let menuCase = parseInt(prompt("Enter an options sir/ma: "))


switch(menuCase){
    case 1:

    let firstDay = `

    On the first day of Christmas
    my true love sent to me

`   

   console.log(firstDay);break



    case 2:
    let secondDay = `

    On the second day of Christmas,
    my true love sent to me
    
   `
    console.log(secondDay);break;



    case 3:
    let thirdDay = `

    On the third day of Christmas,
    my true love sent to me
    
    `
    console.log(thirdDay);break;


    case 4:
    let fourthDay = `

    On the fourth day of Christmas,
    my true love sent to me
    

    `
   console.log(fourthDay);break;



    case 5:
    let fifthDay = `

    On the fifth day of Christmas,
    my true love sent to me
    

    `
    console.log(fifthDay);break;



    case 6:
    let sixthDay = `

    On the sixth day of Christmas,
    my true love sent to me
    

    `
    console.log(sixthDay);break;

    case 7:
    let seventhDay = `
    On the seventh day of Christmas,
    my true love sent to me
    

    `
    console.log(seventhDay);break;


    case 8:
    let eightDay = `

    On the eighth day of Christmas,
    my true love sent to me
  
    `
    console.log(eightDay);break;

    case 9:
    let ninethDay = `

    On the ninth day of Christmas,
    my true love sent to me
  
    `

    console.log(ninethDay);break;

    
    case 10:
    let tenthDay = `

    On the tenth day of Christmas,
    my true love sent to me
    

    `
    console.log(tenthDay);break;


    case 11:
    let eleventhDay = `
    
    On the eleventh day of Christmas,
    my true love sent to me

    `
    console.log(eleventhDay);break;



    case 12:

      
    let twelfthDay = `

    On the twelfth day of Christmas,
    my true love sent to me


    `

    console.log(twelfthDay);break;
    
    case 0:
                
         console.log("This is the end of your programme")
          count = false;
           break;
    


       

}


switch(menuCase){
    case 1:

    let firstDay = `
   
    A partridge in a pear tree

    `
   console.log(firstDay);break;


    case 2:
    let secondDay = `
    
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(secondDay);break;



    case 3:
    let thirdDay = `
   
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(thirdDay);break;

    case 4:
    let fourthDay = `

    
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(fourthDay);break;


    case 5:
    let fifthDay = `
   
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(fifthDay);break;


    case 6:
    let sixthDay = `

    
    Six geese a-laying,
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(sixthDay);break;

    case 7:
    let seventhDay = `
 
    Seven swans a-swimming,
    Six geese a-laying,
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(seventhDay);break;

    case 8:
    let eightDay = `

    
    Eight maids a-milking,
    Seven swans a-swimming,
    Six geese a-laying,
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(eightDay);break;


    case 9:
    let ninethDay = `

    Nine ladies dancing,
    Eight maids a-milking,
    Seven swans a-swimming,
    Six geese a-laying,
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `

    console.log(ninethDay);break;

    case 10:
    let tenthDay = `
  
    Ten lords a-leaping,
    Nine ladies dancing,
    Eight maids a-milking,
    Seven swans a-swimming,
    Six geese a-laying,
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(tenthDay);break;

    case 11:
    let eleventhDay = `
    
    Eleven pipers piping,
    Ten lords a-leaping,
    Nine ladies dancing,
    Eight maids a-milking,
    Seven swans a-swimming,
    Six geese a-laying,
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree.

    `
    console.log(eleventhDay);break;



    case 12:

      
    let twelfthDay = `
    
    Twelve drummers drumming,
    Eleven pipers piping,
    Ten lords a-leaping,
    Nine ladies dancing,
    Eight maids a-milking,
    Seven swans a-swimming,
    Six geese a-laying,
    Five gold rings,
    Four calling birds,
    Three French hens,
    Two turtle doves,
    And a partridge in a pear tree!


    `

    console.log(twelfthDay);break;

    
}

}


}


christmasSong()

