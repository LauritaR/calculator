var screen=document.querySelector('.view');
var bttn=document.querySelectorAll('.buttons button');

var power="";

function number(value)
{
    screen.value+=value;
}

function pow_2()
{
    screen.value= Math.pow(screen.value,2);
}
function pow_y()
{
    power=screen.value;
    screen.value+="^";
    
}

function root(){
    screen.value=Math.sqrt(screen.value,2);
}

function log(value)
{
    if(value=='ln')
    {
      screen.value=Math.log(screen.value).toFixed(8);  
    }
    if(value=='lg')
    {
        screen.value=Math.log10(screen.value).toFixed(8);
    }
    
}

function factorial()
{
    var i, num, f;
    f=1;
    num=screen.value;
    for(i=1;i<=num;i++)
    {
        f=f*i;
    }

    i=i-1;

    screen.value=f
}

function delete_last()
{
    screen.value=screen.value.slice(0, -1);
}

function delete_all()
{
    screen.value='';
}

function trg(value)
{
    if(value=='sin')
    {
        try{
            screen.value=parseFloat(Math.sin((screen.value)/180*Math.PI).toFixed(8).toString());
        }
        catch{
            screen.value="Error";
        }
    }
    else if(value=='cos')
    {
        try{
            screen.value=parseFloat(Math.cos((screen.value)/180*Math.PI).toFixed(8).toString());
        }
        catch{
            screen.value="Error";
        }
    }
    else if(value=='tg')
    {
        try{
            screen.value=parseFloat(Math.tan((screen.value)/180*Math.PI).toFixed(8).toString());
        }
        catch{
            screen.value="Error";
        }
    }
}

function calculate()
{
    var exp= screen.value;
    try{
        if(screen.value.includes('^'))
        {
            var tmp= screen.value.split('^');
            var num=eval(power);
            var pow= +tmp[1];
            screen.value=Math.pow(num,pow);
            power="";
            return;
        }
        screen.value=parseFloat(eval(exp));
    }catch{
        screen.value="Error";
    }
}