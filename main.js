function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}


/* --------------------------------------------------------------------------------------------- */


function sitdata() {
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('password', document.getElementById('pass').value);
    localStorage.setItem('age', document.getElementById('age').value);
    localStorage.setItem('birth', document.getElementById('birth').value);
    localStorage.setItem('description', document.getElementById('des').value);
    localStorage.setItem('major', document.getElementById('major').value);
    localStorage.setItem('sibling', document.getElementById('sib').value);
    localStorage.setItem('sibling_description', document.getElementById('dess').value);
  }
  
  function readdata() {
    document.getElementById("outputName").innerText = "Name: " + localStorage.getItem("name");
    document.getElementById("outputPassword").innerText = "Password: " + localStorage.getItem("password");
    document.getElementById("outputAge").innerText = "Age: " + localStorage.getItem("age");
    document.getElementById("outputBirth").innerText = "Birth Date: " + localStorage.getItem("birth");
    document.getElementById("outputDescription").innerText = "Description: " + localStorage.getItem("description");
    document.getElementById("outputMajor").innerText = "Major: " + localStorage.getItem("major");
    document.getElementById("outputSibling").innerText = "Sibling: " + localStorage.getItem("sibling");
    document.getElementById("outputSiblingDescription").innerText = "Sibling Description: " + localStorage.getItem("sibling_description");
  }
  