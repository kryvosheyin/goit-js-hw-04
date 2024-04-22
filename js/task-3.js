const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        if (typeof newName !== "string" || newName.trim() === "") {
            throw new Error("Expected a non-emptystring for the new name");
        }
        this.username = newName;
    },
    updatePlayTime(hours) {
        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Expected a non-negative number for hours");
        }
        this.playTime += hours;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

console.log("OUTPUTS FOR TASK 3");
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
