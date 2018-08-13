# Catherine's Tic-Tac-Toe Game
For my first project in General Assembly Boston's WDI bootcamp, I created a tic-tac-toe game that includes user account features: signing up, signing in, changing password, and signing out. The user's tic-tac-toe games are saved using API calls to a server, and the user can view the total number of games they've played and won.

Technologies used to create this game: JavaScript, jQuery, AJAX, HTML, Sass, Bootstrap, General Assembly's tic-tac-toe API

## Planning
Before starting to write any code, I created wireframes to visualize my tic-tac-toe game. It included sign in, sign up, and gameplay flows. You can view my wireframes here: https://imgur.com/a/E1n9UM4

I also wrote out some user stories:
- As a user, I can click on an open spot on the tic tac toe board and an 'x' will appear so my move is tracked.
- As a user, I want the computer to tell me whether or not I won/drew/lost so I don't need to figure it out myself.
- As a user, I want to be able to click a button to start a new game after the current game is over so I don't have to refresh or reload the page.
- As a user, I want to see the history of how many games I've won, tied, or lost.

## Development: Basic UI and Game Logic
When I started to code, I created an HTML skeleton that only contained the grid for the tic-tac-toe board. This was primarily to give me a confidence boost before diving into the first tricky part of this project: coding the game logic.

I intially created functions that would print an array representing the tic-tac-toe board spots in the console.
My functions to add 'x' or 'o' printed the letter in the corresponding spot in the array that represented the game board. I also created a function to switch players that would set `currentPlayer` to 'x' or 'o' depending on what the `currentPlayer` was set to.

Next I worked on click handlers to make what was happening in the console appear on the tic-tac-toe board in the browser. I also added the logic to determine win/draw in this phase.

## Development: User Authentication
Initially, I had sign in, sign up, change password, and sign out all together with the tic-tac-toe board in one page. I wasn't concerned about showing and hiding the different components until I set up the API calls for user events.

Once I finished setting up the API calls, I focused on showing and hiding different elements to reflect the wireframes I drew. I also started adding styling to my game using Sass and Bootstrap.

## Development: Game API Calls
This was the most difficult part of this project. I struggled to add the API calls to my game events, since I initially set it up to only update the UI. I was able to finally get the order of events to work so the click event would trigger the API call and then update the game board UI. Seeing my final project run as expected has been the most satisfying feeling I've had so far in this bootcamp!

## Unsolved Problems
My game stats do not live update. They only update when the "game stats" button is clicked.

## Future Updates
I would like to add the ability for the user to play against a computer AI. Have a guest login option would be nice too.
