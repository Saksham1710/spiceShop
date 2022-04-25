function bill(){
    var pepper = document.getElementById('quantityCayennePepper').value; 
    var cloves = document.getElementById('quantityCloves').value;
    var garamMasala = document.getElementById('quantityGaramMasala').value;
    var garlic=document.getElementById('quantityGarlic').value;
    var fenugreek=document.getElementById('quantityFenugreek').value;
    var fennel=document.getElementById('quantityFennel').value;
    var cardamon=document.getElementById('quantityCardamon').value;
    var tumeric=document.getElementById('quantityTurmeric').value;
    var saffron=document.getElementById('quantitySaffron').value;
    var cumin=document.getElementById('quantityCumin').value;
    var asafoetida=document.getElementById('quantityAsafoetida').value;
    var cinnamon=document.getElementById('quantityCinnamon').value;
    var coriander=document.getElementById('quantityCoriander').value;
    var mustardSeeds=document.getElementById('quantityMustardSeeds').value;
    var redChillliPowder=document.getElementById('quantityRedChilliPowder').value;

    var s1=parseInt(pepper);
    var s2=parseFloat(cloves);
    var s3=parseFloat(garamMasala);
    var s4=parseFloat(garlic);
    var s5=parseFloat(fenugreek);
    var s6=parseFloat(fennel);
    var s7=parseFloat(cardamon);
    var s8=parseFloat(tumeric);
    var s9=parseFloat(saffron);
    var s10=parseFloat(cumin);
    var s11=parseFloat(asafoetida);
    var s12=parseFloat(cinnamon);
    var s13=parseFloat(coriander);
    var s14=parseFloat(mustardSeeds);
    var s15=parseFloat(redChillliPowder);

    var total= (s1*0.059)+(s2*0.089)+(s3*0.049)+(s4*0.029)+(s5*0.049)+(s6*0.019)+(s7*0.079)+(s8*0.039)+(s9*5.99)+(s10*0.039)+(s11*0.079)+(s12*0.049)+(s13*0.039)+(s14*0.059)+(s15*0.029);
    document.getElementById('showTotal').innerHTML= "Your Total Bill is $" +  total;
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

