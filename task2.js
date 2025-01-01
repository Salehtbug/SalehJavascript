function Task2(){
    let header= document.getElementById('header')
    let famliy1= document.getElementById('famliy1')
    let fontsize= document.getElementById('fontsize')
    let Boldstyle= document.getElementById('Boldstyle')
    let italicstyle= document.getElementById('italicstyle')
    let underlinestyle= document.getElementById('underlinestyle')

    header.style.fontFamily=famliy1.value;
    header.style.fontSize=fontsize.value;
    header.style.fontWeight=Boldstyle.checked ? 'Bold' : 'normal'
    header.style.fontStyle=italicstyle.checked ? 'italic' : 'normal'
    header.style.textDecoration=underlinestyle.checked ? 'underline' : 'none'
  }

