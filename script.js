const leaderboard = document.getElementById("leaderboard");
const birdLogo = new Image(100, 100);
birdLogo.src = "birdLogo.png";
const devLogo = new Image(100, 100);

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
         let birdLogo = "birdLogo.png";

      }
      else {
         let birdLogo = "";
      }
      // Check for Developer status
      if(player.developer == true) {

      }
      else {

      }
      out += `
         <tr>
            <td class="table-text">${rank}</td>
            <td class="table-text"><img id="birdLogo" src="${birdLogo}">${player.name}</td>
            <td class="table-text">${player.grade}</td>
            <td class="table-text">${player.points}</td>
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