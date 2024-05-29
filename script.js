const leaderboard = document.getElementById("leaderboard");

const dropdownMenu = document.getElementById("dropdownMenu");



fetch("players.json")
.then(function(response){
   return response.json();
})
.then(function(players){
   let out = "";
   let rank = 1;
   let sortedPlayers = players.slice().sort((a,b) => {
      if (Number(a.points) < Number(b.points)) {
         return 1;
      } else if  (Number(a.points) > Number(b.points)) {
         return -1;
      } else {
         return 0;
      }
   
   });

   for (let player of sortedPlayers){

      out += `<tr><td class="table-text">${rank}</td><td class="table-text">`;

      // Check for Early Participant status
      if(player.earlyP == true) {
         out += `<img class="name-icon" src="birdLogo.png" draggable="false">`;
      }
      else {
         out += "";
      }

      // Check for Developer status
      if(player.developer == true) {
         out += `<img class="name-icon" src="TarynEnraged.png" draggable="false">`;
      }
      else {
         out += "";
      }

      // Check for M e n a c e status
      if(player.menace == true) {
         out += `<img class="name-icon" src="wuddleFace.png" draggable="false">`;
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