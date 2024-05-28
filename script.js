const leaderboard = document.getElementById("leaderboard");
const birdLogo = new Image("logo.png");
const devLogo = new Image("devLogo.png");
const dropdownMenu = document.getElementById("dropdownMenu");



fetch("players.json")
.then(function(response){
   return response.json();
})
.then(function(players){
   let out = "";
   let rank = 1;
   let earlyIcon = "";
   let devIcon= "";

   for(let player of players){
      // Check for Early Participant status
      if(player.earlyP == true) {
         earlyIcon = birdLogo;
      }
      else {
         earlyIcon = "";
      }
      // Check for Developer status
      if(player.developer == true) {
         devIcon = devLogo;
      }
      else {
         devIcon = "";
      }
      out += `
         <tr>
            <td>${rank}</td>
            <td>${devIcon}${earlyIcon}${player.name}</td>
            <td>${player.grade}</td>
            <td>${player.points}</td>
         </tr>
      `;
      rank++;
   }
 
   leaderboard.innerHTML = out;
});


function activateDropdownMenu() {
   dropdownMenu.addEventListener('click', ()=> {

   });
}