// This file will contain the es5 js class for an active player when they pen a new socket
class Player {

    // Default constructor
    constructor (name, socketID) {

        // Assign instance variables to class arguments
        this.name = name;
        this.socketID = socketID;

        // Create new instance variables
        this.indvScore = 0;
        this.teamID = 0;

    }

    // Assigned team constructor
    constructor (name, socketID, team) {

        // Assign instance variables to class arguments
        this.name = name;
        this.socketID = socketID;
        this.teamID = teamID;

        // Create new instance variables
        this.indvScore = 0;

    }

    // Static class method to instantiate and return a new player object
    static create (name, socketID) {
        const player = new Player(name, socketID);
        return player;
    }
    
    // Static class method to instantiate and return a new player object with an assigned team
    static create (name, socketID, teamID) {
        const player = new Player(name, socketID, teamID);
        return player;
    }

    // Assign a new integer for the player's team ID
    assignTeam (teamID) {
        this.teamID = teamID;
    }

    // Add an integer score to the individual score variable
    updateScore (points) {
        this.indvScore = this.indvScore + points;
    }

    // toString method to get the player stats for the game
    getStats () {
        let render = "<p>" + this.name + "</p>" + "<p>" + this.teamID + "</p>" + "<p>" + this.indvScore + "</p>";
    }

}