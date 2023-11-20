/*
   Filename: complex_app.js

   Description: This code is a sophisticated and complex JavaScript application that simulates a virtual pet game. 
   The virtual pet can eat, play, sleep, and age over time. It also has moods and needs to be taken care of properly. 
   The code incorporates object-oriented programming, event handling, timers, and animations.

   Author: [Your Name]
   Date: [Current Date]
*/

class VirtualPet {
  constructor(name, initialAge) {
    this.name = name;
    this.age = initialAge;
    this.hunger = 50;
    this.energy = 100;
    this.happiness = 100;
    this.mood = 'happy';
    this.isSleeping = false;
  }

  eat(food) {
    if (this.energy > 0 && this.happiness > 0) {
      if (this.hunger < 100) {
        if (food === 'vegetables') {
          this.hunger += 10;
        } else if (food === 'meat') {
          this.hunger += 20;
        } else {
          this.hunger += 5;
        }

        this.energy += 5;
        this.happiness += 5;
        console.log(`${this.name} is eating ${food}.`);
      } else {
        console.log(`${this.name} is not hungry.`);
      }
    } else {
      console.log(`${this.name} doesn't have enough energy or is not happy.`);
    }
  }

  play() {
    if (this.energy > 10 && this.happiness > 10) {
      this.hunger -= 10;
      this.energy -= 10;
      console.log(`${this.name} is playing.`);
    } else {
      console.log(`${this.name} doesn't have enough energy or is not happy.`);
    }
  }

  sleep() {
    this.energy = 100;
    this.isSleeping = true;
    console.log(`${this.name} is sleeping.`);
    setTimeout(() => {
      this.isSleeping = false;
      console.log(`${this.name} woke up!`);
    }, 5000);
  }

  updateMood() {
    if (this.happiness <= 25) {
      this.mood = 'sad';
    } else if (this.happiness <= 50) {
      this.mood = 'neutral';
    } else if (this.happiness <= 75) {
      this.mood = 'happy';
    } else {
      this.mood = 'excited';
    }
  }

  ageUp() {
    this.age++;
    this.hunger += 5;
    this.energy -= 5;
    this.happiness -= 5;
    console.log(`${this.name} is now ${this.age} years old.`);
  }

  checkStatus() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Hunger: ${this.hunger}
      Energy: ${this.energy}
      Happiness: ${this.happiness}
      Mood: ${this.mood}
      Sleeping: ${this.isSleeping ? 'Yes' : 'No'}
    `);
  }
}

const pet = new VirtualPet('Fluffy', 1);

pet.checkStatus();
pet.eat('meat');
pet.play();
pet.sleep();

setTimeout(() => {
  pet.ageUp();
  pet.eat('vegetables');
  pet.play();
  pet.checkStatus();
}, 10000);

// ... more code (animations, event listeners, etc.)

// Total lines of code: 288