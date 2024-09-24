//Model
let app = document.getElementById('App')
let textOne = "_"
let textTwo = "_"
let textThree = "_"





//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/ `
<div>There once was a ${textOne}, who was very ${textTwo}, they ${textThree} and then everyone was happy ever after. The end</div>
<br/>
<div class="option" onclick="changeTxt2(this.innerHTML)">Happy</div>
<div class="option" onclick="changeTxt(this.innerHTML)">Bird</div>
<div class="option" onclick="changeTxt3(this.innerHTML)">Dabbed</div>
<div class="option" onclick="changeTxt(this.innerHTML)">Fish</div>
<div class="option" onclick="changeTxt(this.innerHTML)">Dude</div>
<div class="option" onclick="changeTxt2(this.innerHTML)">Stupid</div>
<div class="option" onclick="changeTxt3(this.innerHTML)">Rizzed</div>
<div class="option" onclick="changeTxt2(this.innerHTML)">Useless</div>
<div class="option" onclick="changeTxt3(this.innerHTML)">Died</div>
<div class="option" onclick="changeTxt2(this.innerHTML)">Talented</div>
<div class="option" onclick="changeTxt3(this.innerHTML)">Sang</div>
<div class="option" onclick="changeTxt(this.innerHTML)">MichaelJackson</div>
`
}




//Controller
function changeTxt(value){
    console.log('textOne: '+value)
textOne = value
UpdateView();
}
function changeTxt2(value){
textTwo = value;
updateView();
}
function changeTxt3(value){
textThree = value;
updateView();
 }









