Riddles Game Project - Technical Documentation
Project Structure Overview
riddles-game-project/
├── CLIENT/                     # Frontend application
│   ├── clases/                 # Class definitions
│   │   ├── player.js          # Player class with game logic
│   │   └── riddle.js          # Riddle class with question handling
│   ├── Services/              # Service layer for business logic
│   │   ├── api.js             # API communication layer
│   │   ├── createRiddel.js    # Riddle creation utilities
│   │   ├── game.js            # Core game logic
│   │   ├── inputHandler.js    # User input management
│   │   └── menu.js            # Menu navigation system
│   ├── app.js                 # Application entry point
│   ├── package.json           # Client dependencies
│   └── riddle_game_html.html  # Web interface prototype
├── SERVER/                    # Backend application
│   ├── Authentication/        # Security layer
│   │   ├── loginManeger.js    # Login/registration handlers
│   │   └── tokenHandler.js    # JWT token management
│   ├── Routes/                # API endpoints
│   │   ├── riddles.js         # Riddle CRUD operations
│   │   └── players.js         # Player management endpoints
│   ├── controlers/            # Business logic controllers
│   │   ├── playersCtrl.js     # Player operations controller
│   │   └── riddleCtrl.js      # Riddle operations controller
│   ├── Dal/                   # Data Access Layer
│   │   ├── playerDal.js       # Player database operations
│   │   └── riddeslDal.js      # Riddle database operations
│   ├── lib/                   # External service integrations
│   │   ├── mongoClient.js     # MongoDB connection
│   │   └── supabase.js        # Supabase database client
│   ├── ServerApp.js           # Server entry point
│   └── package.json           # Server dependencies
└── package.json               # Root workspace configuration
Detailed File Analysis
CLIENT Side
/CLIENT/clases/player.js
Purpose: Player entity with game statistics tracking
javascriptclass Player {
    constructor(name, id)          // Initialize player with name and ID
    recordTime(start, end)         // Record time taken for single riddle
    showStats()                    // Calculate total time across all riddles
    lowestTimeCheck()              // Update personal best time record
}

Input: Player name, unique identifier, start/end timestamps
Output: Time statistics, personal best updates
Returns: Player instance, time values, best time status

/CLIENT/clases/riddle.js
Purpose: Riddle entity with question presentation logic
javascriptclass Riddle {
    constructor(riddle)            // Initialize riddle from database object
    ask(start)                     // Present question and validate answer
}

Input: Riddle object with question, answer, difficulty
Output: Console prompts, answer validation
Returns: Void (continues until correct answer)

/CLIENT/Services/api.js
Purpose: HTTP client for server communication
javascriptfetchToReadRiddleDB()              // Retrieve all riddles from server
fetchToReadRiddleById(id)          // Get specific riddle by ID
fetchNewRiddle(newriddle)          // Submit new riddle to server
fetchToUpdateRiddleById(id, riddle) // Update existing riddle
fetchToDeleteRiddleByQuestion(q)   // Remove riddle by question text
CreateNewPlayer(name)              // Register new player
CreateNewPlayerAndPassword(u, p)   // Register with authentication
loginPlayerAndPassword(u, p)       // Authenticate existing player
CheckIfExistInFile(name)           // Verify player existence
addToPlayerScore(p, r, time)       // Record game performance
updeatLowestTime(player, time)     // Update personal best

Input: Various data types (strings, objects, numbers)
Output: HTTP requests to server endpoints
Returns: Promise-wrapped server responses

/CLIENT/Services/game.js
Purpose: Core game flow orchestration
javascriptplayGame()                         // Main game execution loop
playerForGame(name)                // Player initialization or retrieval

Input: Player name, difficulty selection
Output: Game session with riddles and timing
Returns: Game completion statistics

/CLIENT/Services/menu.js
Purpose: User interface navigation system
javascriptmainMenu()                         // Display primary menu options

Input: User menu selections
Output: Navigation to game features
Returns: Void (navigation flow)

/CLIENT/Services/inputHandler.js
Purpose: User input management utilities
javascriptclass InputHandler {
    ask(question)                  // Prompt user for text input
    selectFromList(question, opts) // Present numbered option menu
    getDifficulty()                // Difficulty selection interface
    getMainMenuChoice()            // Main menu option selection
    close()                        // Cleanup input interface
}

Input: Questions, option arrays
Output: User prompts and validation
Returns: User selections as strings

/CLIENT/Services/createRiddel.js
Purpose: Riddle creation workflow
javascriptaskForRiddle(input)                // Guided riddle creation process

Input: InputHandler instance
Output: User prompts for riddle data
Returns: Riddle object ready for submission

SERVER Side
/SERVER/Authentication/loginManeger.js
Purpose: User authentication operations
javascriptsingUp(req, res)                   // User registration with password hashing
login(req, res)                    // User authentication with token generation

Input: HTTP request with username/password
Output: HTTP response with authentication status
Returns: Success/failure status with JWT token

/SERVER/Authentication/tokenHandler.js
Purpose: JWT token lifecycle management
javascriptgetToken(username)                 // Generate JWT for authenticated user
tokenCreator(player)               // Create signed JWT with player data
tokenVerifier(req, res, next)      // Validate incoming JWT tokens
authorizeRoles(...roles)           // Role-based access control middleware
verifyTokenOnly(token)             // Token validation without middleware
checkExistingToken(req, res, next) // Check for existing valid tokens

Input: Username, player object, JWT tokens, role arrays
Output: JWT tokens, validation results
Returns: Authentication status, decoded token data

/SERVER/Routes/riddles.js
Purpose: Riddle API endpoint definitions
javascriptGET /riddles                       // Retrieve all riddles
POST /riddles                      // Create new riddle
DELETE /riddles/:Question          // Remove riddle by question

Input: HTTP requests with riddle data
Output: JSON responses with riddle data
Returns: CRUD operation results

/SERVER/Routes/players.js
Purpose: Player API endpoint definitions
javascriptGET /players                       // Retrieve all players
GET /player/:name                  // Get specific player by name
POST /player/login                 // Authenticate player
POST /player                       // Create new player
POST /player/addScore              // Record game score
POST /player/singup                // Register new player
PUT /player/updateltime            // Update personal best time

Input: HTTP requests with player data
Output: JSON responses with player information
Returns: Player data, authentication tokens

/SERVER/controlers/playersCtrl.js
Purpose: Player business logic coordination
javascriptgetPlayerByName(req)               // Retrieve player by name
updatePlayerLtime(req)             // Update player's best time
addNewPlayer(req)                  // Create new player record
addPlayerScore(req)                // Record player performance

Input: HTTP request objects
Output: Processed player data
Returns: Success/failure status, player data

/SERVER/controlers/riddleCtrl.js
Purpose: Riddle business logic coordination
javascriptaddNewRiddle(req)                  // Process new riddle creation

Input: HTTP request with riddle data
Output: Database insertion result
Returns: Success/failure status

/SERVER/Dal/playerDal.js
Purpose: Player database operations layer
javascriptcreatNewPlayer(userName, role)     // Insert new player record
creatNewPlayerAndPassword(u, p, r) // Insert player with authentication
getAllPlayers()                    // Retrieve all player records
getPlayerByName(name)              // Query player by username
writeToPlayerScores(pID, rID, time) // Record game performance
checkIfExsist(name)                // Verify player existence
getPlayerId(username)              // Retrieve player ID by name
getPlayerPassword(username)        // Get hashed password for authentication
updatePlayerBestTime(player, time) // Update personal best record

Input: Player data, usernames, passwords, scores
Output: Database query results
Returns: Player objects, boolean existence checks, operation status

/SERVER/Dal/riddeslDal.js
Purpose: Riddle database operations layer
javascriptinsertNewRiddel(riddle)            // Insert new riddle record
getAllRiddeles()                   // Retrieve all riddle records
deletedByQuestion(Question)        // Remove riddle by question text

Input: Riddle objects, question strings
Output: Database operation results
Returns: Riddle data arrays, deletion status

/SERVER/lib/mongoClient.js
Purpose: MongoDB connection management
javascriptmongoclientdb                      // MongoDB client instance

Input: MongoDB connection string from environment
Output: Connected database client
Returns: Database connection object

/SERVER/lib/supabase.js
Purpose: Supabase database client
javascriptPlayersDB()                        // Initialize Supabase connection

Input: Supabase credentials
Output: Connected Supabase client
Returns: Supabase client instance

Game Flow Analysis
User Registration Flow

Client: User selects signup from menu (mainMenu())
Client: CreateNewPlayerAndPassword() sends POST to /player/singup
Server: singUp() validates input and hashes password with bcrypt
Server: creatNewPlayerAndPassword() inserts to Supabase database
Server: Returns success/failure status to client
Client: Displays registration result and redirects to login

User Login Flow

Client: User selects login and enters credentials
Client: loginPlayerAndPassword() sends POST to /player/login
Server: login() retrieves hashed password via getPlayerPassword()
Server: bcrypt compares provided password with stored hash
Server: On success, getToken() generates JWT with player data
Server: Returns JWT token to client
Client: Stores token for subsequent authenticated requests

Game Playing Flow

Client: User selects "Play the game" from main menu
Client: playGame() prompts for difficulty selection
Client: fetchToReadRiddleDB() retrieves all riddles from server
Server: getAllRiddeles() queries MongoDB for riddle collection
Client: Filters riddles by selected difficulty level
Client: playerForGame() initializes or retrieves player instance
Client: For each riddle:

Creates Riddle instance and calls ask()
Records start time before question presentation
Validates user answer in loop until correct
Records end time and calculates duration
addToPlayerScore() sends performance data to server


Server: writeToPlayerScores() records individual riddle performance
Client: lowestTimeCheck() evaluates if new personal best achieved
Client: updeatLowestTime() updates server with new best time if applicable
Client: Displays game completion statistics

Riddle Creation Flow

Client: User selects "Create a new riddle" from menu
Client: askForRiddle() guides user through riddle input process
Client: fetchNewRiddle() sends POST to /riddles endpoint
Server: addNewRiddle() processes request through controller
Server: insertNewRiddel() inserts to MongoDB collection
Server: Returns creation status to client
Client: Displays success confirmation

Riddle Management Flow

Client: User selects "Read all riddles" or "Delete a riddle"
Client: fetchToReadRiddleDB() or fetchToDeleteRiddleByQuestion()
Server: getAllRiddeles() or deletedByQuestion() operations
Server: MongoDB queries executed and results returned
Client: Displays riddle data or deletion confirmation