var sw = false,sw2 = false;
var a, b;
var n = ' ';

function keysubmit(key)
{
    
    if (document.getElementById("outText").value == "0") document.getElementById("outText").value="";

    var input = Number(key);
 
    if(input>=0 || input<=9) // is number
    {
    document.getElementById("outText").value += input;
    }
    else //is not number
    {        
        if (sw2 == true)
            {
                document.getElementById("outPut").innerHTML = "  ";                
            }
            if (sw == true)
            {
                switch (n)
                {
                    case '+':
                        a += Number(document.getElementById("outText").value);                     
                        break;
                    case '-':  
                        a -= Number(document.getElementById("outText").value);                  
                        break;
                    case '/':
                        a /= Number(document.getElementById("outText").value);           
                        break;
                    case '*':
                        a *= Number(document.getElementById("outText").value);                         
                        break;
                }
                document.getElementById("outPut").innerHTML += ' '+document.getElementById("outText").value;
                document.getElementById("outText").value ="";
                document.getElementById("outPut").innerHTML+= " "+key;
            }
            else
            {
                document.getElementById("outPut").innerHTML = "";
                a = Number(document.getElementById("outText").value);
                document.getElementById("outPut").innerHTML = ' ' + document.getElementById("outText").value+" "+key;
                document.getElementById("outText").value = "";
                sw = true;
            }
            n = key;           
    }
}

function equal()
{
    document.getElementById("outPut").innerHTML +=' '+document.getElementById("outText").value;
    switch (n)
    {
        case '-':
            b = Number(document.getElementById("outText").value);
            document.getElementById("outText").value = a - b;
            a = a - b;
        break;
        case '+':
            b = Number(document.getElementById("outText").value);
            document.getElementById("outText").value = a + b;
            a = a + b;
        break;
        case '/':
            b = Number(document.getElementById("outText").value);
            document.getElementById("outText").value = a / b;
            a = a * b;
        break;
        case '*':
            b = Number(document.getElementById("outText").value);
            document.getElementById("outText").value = a * b;
            a = a * b;     
        break;          
    }
    document.getElementById("outPut").innerHTML +=" ="+ ' '+document.getElementById("outText").value;
    sw2 = true;
    sw = false;
}