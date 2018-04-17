const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener()
let index = 0;

function onKeyDownHandler(e){
  console.log(`Detail: ${e.detail}\nWhich: ${e.which}\nLocation: ${e.location}`);
  const key = parseInt(e.detail)
    if (key==code[index]){
      index++;
      if (index ==code.length){
        alert()
      }
  }
}
}