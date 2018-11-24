var imagens= new Array('foto1.png','foto2.png', 'foto3.png', 'foto4.png');
var num_img= 4;
var img_atual= -1;

function ChangeImg(){
    if (img_atual < (num_img - 1)){
        img_atual = img_atual + 1;
   }
   else{
        img_atual = 0;
   }
    document["muda"].src= "img/" + imagens[img_atual];
   var x = setTimeout ("ChangeImg()", 7000);
}


var imgSrc = ['img/foto1.png','img/foto2.png', 'img/foto3.png', 'img/foto4.png','img/foto5.png',
              'img/foto6.png', 'img/foto7.png', 'img/foto8.png', 'img/foto9.png', 'img/foto10.png'];
var imgContador=1;

function trocar(){
    if(imgContador == imgSrc.length){
      imgContador=0;
    }
    if (imgContador==-1) {
      imgContador=1;
    }
     document.getElementById("imgModal").src=imgSrc[imgContador]; 
      imgContador++; 
}

function voltar(){
    if(imgContador == -1){
      document.getElementById("botesq").disabled = false;
    }
     document.getElementById("imgModal").src=imgSrc[imgContador]; 
      imgContador--; 
}

function modal(img){
    var janelamodal= document.getElementById("modal");
    var imagemodal = document.getElementById("imgModal");
    var botaomodal = document.getElementById("fechar");

    janelamodal.style.display = "block";
    imagemodal.src=img.src;
    botaomodal.onclick = function(){
      janelamodal.style.display = "none";
    }
}


/*ul#fotos li:nth-child(n) img { 
    transform: rotate(-5deg);  
    position: relative; 
    top: -5px; 
}

ul#fotos li:nth-child(2n) img { 
    transform: rotate(5deg); 
    position: relative; 
    right: 5px; 
}*/