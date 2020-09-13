// This file will contain the es5 js class for an active player when they pen a new socket
class Player {

    // Default constructor
    constructor (name, socketID, teamID) {

        // Assign instance variables to class arguments
        this.name = name;
        this.socketID = socketID;

        // Check to see if a team is manually assigned or still waiting for assignment
        if (!teamID === 0) {
            this.teamID = teamID;
        }

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