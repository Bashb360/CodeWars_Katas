function duckDuckGoose(players, goose) {
    while (goose > players.length) {
      goose = goose - players.length
    }
   
    return players[goose - 1].name
  }

  function duckDuckGoose(players, goose) {
  
    return players[(goose-1)%players.length].name
  }

  function duckDuckGoose(players, goose) {
    const playerCount = players.length;
    const gooseCount = goose - 1;
    let index = gooseCount % playerCount;
    return players[index].name;
   }

   function duckDuckGoose(players, goose) {
    // Adjusting goose index to fit within the range of players
    goose = (goose - 1) % players.length;
    // Returning the name of the chosen player
    return players[goose].name;
  }
  
  // Example usage:
  const players = [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
    { name: 'd' }
  ];