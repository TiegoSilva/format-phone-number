const xlsxFile = require('read-excel-file/node'); 

var express = require('express');
var app = express();


app.get('/', async (req, res) => {

    let printed = "";


    await xlsxFile('./Data.xlsx').then( async (rows) => { 

        for( let x = 0; x < rows.length; x++){
            
            let final = "";
            let  test1 = rows[x][0] + "";
    
            let without_space = await test1.replaceAll(" ", "");
            let without_hyphen = await without_space.replaceAll("-", "");
            let without_parentheses = await without_hyphen.replaceAll('(', "");
            without_parentheses = await without_parentheses.replaceAll(')', ""); 
            let without_plus = await without_parentheses.replaceAll("+", "");
           

            if(without_plus.length == 11){
                final = "55" + without_plus;
            }else if(without_plus.length == 9){
                final = "5521" + without_plus;
            }else if(without_plus.length == 8){
                final = "55219" + without_plus;
            }else if(without_plus.length == 13){
                final = without_plus;
            }else if(without_plus.length == 10){
                final = without_plus;
            }

            printed += final + "<br />";
            console.log(final);
        }

        

    })

    res.send(printed);

    //console.log(without_plus);


    
})

app.listen(process.env.PORT || 3000, () => {
    console.log("O servidor está rodando")
})