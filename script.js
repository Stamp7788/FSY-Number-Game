fetch("players.json")
.then(function(response){
   return response.json();
})
.then(function(players){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let player of players){
      out += `
         <tr>
            <td>${player.name}</td>
            <td>${player.grade}</td>
            <td>${player.points}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});