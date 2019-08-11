// First, we have to grab all of the stuff we need to make this file work
import Phaser from "phaser";
import Character from "/.DO_NOT_TOUCH/classes/Character.js";

/***********************************************************
 *  Change stuff after this line! */

// This function creates platforms and adds them to the scene
export function createPlatforms(scene) {
  console.log("creating platforms");
  let platforms = [
    this.addPhysicalRectangle(150, 150, 500, 10, 0x00aa00),
    this.addPhysicalRectangle(350, 225, 500, 10, 0x00aa00),
    this.addPhysicalRectangle(250, 295, 500, 10, 0x00aa00)
  ];

  // Green Platforms
  this.physics.add.collider(this.johnny.sprite, platforms);

  // Red wall
  this.physics.add.collider(
    this.johnny.sprite,
    this.addPhysicalRectangle(250, 73, 10, 145, 0xff0000)
  );
}

// This function creates a goal and adds it to the scene
export function createGoal(scene) {
  // Goal
}

// This function creates a player and adds it to the scene
export function createPlayer(scene) {
  console.log("creating player");
  this.johnny = new Character(this, 10, 0);
  this.johnny.sprite.setCollideWorldBounds(true);
}
