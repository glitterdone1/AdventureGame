class Player {
    constructor(name, gender, species, maxHealth, accuracy, evasion, damage, armor, weaponName) {
        this.name = name;
        this.gender = gender;
        this.species = species;
        this.maxHealth = maxHealth;
        this.accuracy = accuracy;
        this.evasion = evasion;
        this.damage = damage;
        this.armor = armor;
        this.weaponName = weaponName;
        
        this.health = maxHealth;
    }
}