// CREATING NEW PRODUCT

function product (title,catchPhrase,description){

  this.title = title,
  this.catchPhrase = catchPhrase,
  this.description = description

}

// MANAGING HTML

var form = {

  inputs : document.getElementsByClassName('input'),

display : function () {

  var table = document.getElementById('card');
  var row = document.createElement('tr');
  for (var i = 0; i < this.inputs.length; i++) {
    row.innerHTML += "<td>" + this.inputs[i].value + "</td>";
  }
    table.appendChild(row);

},

getInputVal : function () {

  var newCard = new product (this.inputs[0].value,this.inputs[1].value,this.inputs[2].value);
  form.display();
},

resetInput : function () {

  for (var i = 0; i < this.inputs.length; i++) {
    this.inputs[i].value ="";
  };
  }

};

document.getElementById("create").addEventListener('click',function () {
  form.getInputVal();
  form.resetInput();
});
