/* global Phaser */

// Created by: Kenneth
//
// Created on: Apr 2024
// This is the Phaser3 game configuration file

// scene import statements
import SplashScene from "./splashScene.js"

//create the new scenes
const splashScene = new SplashScene()

/**
* Start Phaser Game
*/
const config = {
 type: Phaser.AUTO,
 width: 1920,
 height: 1080,
 physics: {
   default: "arcade",
   arcade: {
     debug: true,
   },
 },
 // Background colour
 backgroundColor: 0x5f6e7a,
 scale: {
   mode: Phaser.Scale.FIT,
   autoCenter: Phaser.Scale.CENTER_BOTH,
 },
}

const game = new Phaser.Game(config)
// console.log(game)

// load notes
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)

// the start scene
game.scene.start("splashScene")


