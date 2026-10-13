class Creature {
    constructor(identity, maxHealth, accuracy, evasion, damage, armor, weaponName) {
        this.identity = identity;
        this.maxHealth = maxHealth;
        this.accuracy = accuracy;
        this.evasion = evasion;
        this.damage = damage;
        this.armor = armor;
        this.weaponName = weaponName;
        
        this.health = maxHealth;
        this.ally = false;

    }

    chooseTarget(playerAllies, enemyList) {
        if (this.ally = true) {
            const enemyTarget = enemyList[Math.floor(Math.random() * enemyList.length) + 1];
            console.log(Math.floor(Math.random() * enemyList.length) + 1);
            return enemyTarget;
        } 
        else {
            const goodTarget =  playerAllies[Math.floor(Math.random() * playerAllies.length) + 1];
            console.log(Math.floor(Math.random() * enemyList.length) + 1);
            return goodTarget;
        }
    }

    basicAttack() {

    }
    makeAlly() {
        this.ally = true;
        playerAllies += this;
    }
    makeEnemy() {
        this.ally = false;
    }
}

let playerAllies = [];

let enemyList = [];

function initCombat() {
    // may be able to do this with listing whether the creature is an ally or not in the object.
}

function combatRound() {

}