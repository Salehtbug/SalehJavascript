async function fetchUserData() {
    console.log("Brefor fetch Done");
    
    const response = await fetch('https://api.npoint.io/282fd0b4a0bc0efef550');
    console.log("After Fetch Respons");
    console.log(response);
    

    const data = await response.json();
    console.log("response Done");
    console.log(data);
    
    
    const outputDiv = document.getElementById('output');

    
    for (const user of data) {
        
        const userCard = document.createElement('div');
        userCard.className = 'card';
        userCard.innerHTML  = `
          <h3>${user.name}</h3>
          <p><strong>Age: </strong>${user.Age}</p>
          <p><strong>Email: </strong> ${user.Email}</p>
          <p><strong>Profession: </strong> ${user.Profession}</p><br><hr><br>
        `;

        outputDiv.appendChild(userCard);
    }


}







