const leaderboard = document.getElementById("leaderboard");

const dropdownMenu = document.getElementById("dropdownMenu");



fetch("players.json")
.then(function(response){
   return response.json();
})
.then(function(players){
   let out = "";
   let rank = 1;

   for(let player of players){

      out += `<tr><td class="table-text">${rank}</td><td class="table-text">`;

      // Check for Early Participant status
      if(player.earlyP == true) {
         out += `<img class="bird-logo" src="birdLogo.png" draggable="false">`;
      }
      else {
         out += "";
      }

      // Check for Developer status
      if(player.developer == true) {
         out += `<img class="dev-logo" src="TarynEnraged.png" draggable="false">`;
      }
      else {
         out += "";
      }

      out += `${player.name}</td>`
      out += `<td class="table-text">${player.grade}</td>
      <td class="table-text">${player.points}</td>`
      rank++;
   }
 
   leaderboard.innerHTML = out;
});


function activateDropdownMenu() {
   dropdownMenu.addEventListener('click', ()=> {

   });
}