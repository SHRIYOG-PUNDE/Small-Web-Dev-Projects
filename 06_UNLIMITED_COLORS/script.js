const random = function(){
    const hex = '0123456789ABCDEF'
    let color = "#"
    for(let i = 0; i<6; i++){
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let intervalId;
  const changeBgColor = function(){
    document.body.style.backgroundColor = `${random()}`
  }
  const startChangColor = function(){
    if(!intervalId){
      intervalId = setInterval(changeBgColor,1000)
    }
  }
  const stopChangColor = function(){
    clearInterval(intervalId)
    intervalId = null
  }
  document.querySelector("#start").addEventListener("click", startChangColor)
  document.querySelector("#stop").addEventListener("click", stopChangColor)