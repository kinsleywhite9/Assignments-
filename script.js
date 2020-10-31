function formValidate() {
  var x = document.forms["formTwo"]["password"].value;
  if (x.length < 8){
    alert("Password must be 8 characters long");
    return false;
  }else {
    return true;
  }
}