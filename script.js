
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
    let img = document.getElementById("human_image");
    let imgData = getBase64Image(img);
    localStorage.setItem('image', imgData);
    location.href="result.html";
}

function getBase64Image(img){
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);

    let datURL = canvas.toDataURL("image/png");

    return datURL.replace(/^data:image\/(png|jpg);base64,/, "");
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