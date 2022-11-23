
function upload()
{
    if(localStorage.getItem("gender")=="W")
    {
        document.getElementById('gen').innerHTML='나는 어떤 동물과 닮았을까? <img src="./photo/w_small.png" width="40"/>';
    }
    if(localStorage.getItem("gender")=="M")
    {
        document.getElementById('gen').innerHTML='나는 어떤 동물과 닮았을까? <img src="./photo/m_small.png" width="40"/>';
    }
}

function upload_ph()
{
    location.href="result.html";
}

function Click_W()
{
    localStorage.setItem("gender", 'W');
    location.href="upload.html";
}

function Click_M()
{
    localStorage.setItem("gender", 'M');
    location.href="upload.html";
}

function eval()
{
    location.href="evaluation.html"; //need animal parameter 
}

function full(num)//full star
{
    document.getElementById('star_'+num).innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty('+num+')"/>';
}
function empty(num)//empty star
{
    document.getElementById('star_'+num).innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full('+num+')"/>';
}