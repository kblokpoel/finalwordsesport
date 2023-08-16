function showPlayerDetails(playerId) {
    const player = getPlayerData(playerId); 
    const playerDetailsOverlay = document.getElementById('player-details-overlay');
    const playerDetails = document.getElementById('player-details');
    
    document.getElementById('player-name').textContent = player.name;
    document.getElementById('player-bio').textContent = player.bio;
    
    playerDetailsOverlay.style.display = 'flex';
    setTimeout(() => {
      playerDetails.style.opacity = 1;
    }, 10); // Delay for a smoother transition
  }
  
  function hidePlayerDetails() {
    const playerDetailsOverlay = document.getElementById('player-details-overlay');
    const playerDetails = document.getElementById('player-details');
    
    playerDetails.style.opacity = 0;
    setTimeout(() => {
      playerDetailsOverlay.style.display = 'none';
    }, 200); // Delay for the transition duration
  }
  
  function getPlayerData(playerId) {
    const players = {
      'player1': {
        name: 'Maple',
        bio: 'Sentinel: Cypher, Killjoy',
      },
      'player2': {
        name: 'Zvar',
        bio: 'Controller: Brimstone, Astra, Harbor, Viper',
      },
      'player3': {
        name: 'J0hnty',
        bio: 'Initiator: Skye, Sova, Breach, KAY/O',
      },
      'player4': {
        name: 'Index',
        bio: 'Duelist: Jett, Reyna, Raze',
      },
      'player5': {
        name: 'ImagineWhisp',
        bio: 'Fill: Initiator, Smokes.',
      },
      'player6': {
        name: 'B0dker',
        bio: 'Coach and sub player',
      },
 //spelers toevoegen
    };
    return players[playerId];
  }
  