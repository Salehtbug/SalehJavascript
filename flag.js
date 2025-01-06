function view() {
    let jordan1= document.getElementById('jordan1')
    let yemen1= document.getElementById('yemen1')
    let view1 = document.getElementById('flag').value;
  
  
  
    if (view1 === "jordan1") {
      jordan1.style.display = "block"
      yemen1.style.display = "none"
  
      
    } else if (view1 === "yemen1" ) {
      jordan1.style.display = "none"
      yemen1.style.display = "block"
    }
  
  
    else{
      jordan1.style.display = "none"
      yemen1.style.display = "none"
    }
  }
    