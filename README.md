# Catherine's Tic-Tac-Toe Game
For my first project in General Assembly Boston's WDI bootcamp, I created a tic-tac-toe game that includes user account features: signing up, signing in, changing password, and signing out. The user's tic-tac-toe games are saved using API calls to a server, and the user can view the total number of games they've played and won.

Technologies used to create this game: JavaScript, jQuery, AJAX, HTML, Sass, Bootstrap, General Assembly's tic-tac-toe API

## Planning
Before starting to write any code, I created wireframes to visualize my tic-tac-toe game. It included sign in, sign up, and gameplay flows. You can view my wireframes here: https://imgur.com/a/E1n9UM4

## Development: Basic UI and Game Logic
When I started to code, I created an HTML skeleton that only contained the grid for the tic-tac-toe board. This was primarily to give me a confidence boost before diving into the first tricky part of this project: coding the game logic.

I intially created functions that would print an array representing the tic-tac-toe board spots in the console.
My functions to add 'x' or 'o' printed the letter in the corresponding spot in the array that represented the game board. I also created a function to switch players that would set `currentPlayer` to 'x' or 'o' depending on what the `currentPlayer` was set to.

Next I worked on click handlers to make what was happening in the console appear on the tic-tac-toe board in the browser. I also added the logic to determine win/draw in this phase.

## Development: User Authentication
Initially, I had sign in, sign up, change password, and sign out all together with the tic-tac-toe board in one page. I wasn't concerned about showing and hiding the different components until I set up the API calls for user events (sign in, sign up, change password, and sign out).

Once those were complete, I focused on showing and hiding different elements to reflect the wireframes I drew.
