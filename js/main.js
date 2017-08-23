function product (title,catchPhrase,description){

  this.title = title,
  this.catchPhrase = catchPhrase,
  this.description = description,

 this.display = function () {

  var card = document.getElementById('card').cloneNode(true);
  document.getElementById('table').appendChild(card);
  document.getElementById('productTitle').innerHTML = this.title;
  console.log(this.title);
  document.getElementById('productCatchPhrase').innerHTML = this.catchPhrase;
  document.getElementById('productDescription').innerHTML = this.description;

}
}

function form (){

this.getInputVal = function () {

  var titleValue = document.getElementById('title').value;
  var catchPhraseValue = document.getElementById('catchPhrase').value;
  var descriptionValue = document.getElementById('description').value;
  var newCard = new product (titleValue,catchPhraseValue,descriptionValue);
  newCard.display ();

},

this.resetInput = function () {

  document.getElementById('title').value = "";
  document.getElementById('catchPhrase').value = "";
  document.getElementById('description').value = "";

}
}

document.getElementById("create").addEventListener('click',function () {
  var card = new form;
  card.getInputVal();
  card.resetInput();
});
