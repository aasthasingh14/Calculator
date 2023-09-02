function Clear()
{
    var input = document.getElementById('result');
    input.value=' ';
}

function Display(val)
{
    var dis = document.getElementById('result');
    dis.value += val;
}

function negative()
{
    if (result.value.charAt(0)==="-")
        result.value = result.value.slice(1);
    else    
        result.value = "-" + result.value;
}

function equal()
{
    result.value=eval(result.value);
}

function backspace()
{
    result.value=result.value.slice(0,-1);
}