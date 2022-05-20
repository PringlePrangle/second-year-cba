/**
 * create and set snek1 target
 */
/**
 * create and set snek2 target
 */
/**
 * create and set snek3 target
 */
/**
 * create and set snek4 target
 */
/**
 * movement keys
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -1
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim1`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 1
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkright`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -1
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkleft`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 1
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
/**
 * setting the enemies target
 */
let tall: Sprite = null
let snekdown: Sprite = null
let snekright: Sprite = null
let snekleft: Sprite = null
let snek: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
mySprite.setScale(0.6, ScaleAnchor.Middle)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDark1)
scene.cameraFollowSprite(mySprite)
let tarketup = sprites.create(assets.image`targettop`, SpriteKind.Food)
tiles.placeOnRandomTile(tarketup, assets.tile`myTile5`)
let targetdown = sprites.create(assets.image`targetdown`, SpriteKind.Food)
tiles.placeOnRandomTile(targetdown, assets.tile`myTile7`)
let targetleft = sprites.create(assets.image`targetleft`, SpriteKind.Food)
tiles.placeOnRandomTile(targetleft, assets.tile`myTile6`)
let targetright = sprites.create(assets.image`targetright`, SpriteKind.Food)
tiles.placeOnRandomTile(targetright, assets.tile`myTile4`)
if (true) {
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snek, assets.tile`myTile12`)
    animation.runImageAnimation(
    snek,
    assets.animation`snekfromup`,
    200,
    true
    )
}
if (true) {
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snek, assets.tile`myTile12`)
    animation.runImageAnimation(
    snek,
    assets.animation`snekfromup`,
    200,
    true
    )
}
if (true) {
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snek, assets.tile`myTile12`)
    animation.runImageAnimation(
    snek,
    assets.animation`snekfromup`,
    200,
    true
    )
}
if (true) {
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snek, assets.tile`myTile12`)
    animation.runImageAnimation(
    snek,
    assets.animation`snekfromup`,
    200,
    true
    )
}
if (randint(1, 4) == 1) {
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snek, assets.tile`myTile12`)
    animation.runImageAnimation(
    snek,
    assets.animation`snekfromup`,
    200,
    true
    )
    snek.setScale(3, ScaleAnchor.Middle)
    snek.setVelocity(200, 200)
    snek.follow(tarketup, 100)
}
if (randint(1, 4) == 2) {
    snekleft = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snekleft, assets.tile`myTile14`)
    animation.runImageAnimation(
    snekleft,
    assets.animation`snekfromleft`,
    200,
    true
    )
    snekleft.setScale(3, ScaleAnchor.Middle)
    snekleft.setVelocity(200, 200)
    snekleft.follow(targetleft, 100)
}
if (randint(1, 4) == 3) {
    snekright = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snekright, assets.tile`myTile13`)
    animation.runImageAnimation(
    snekright,
    assets.animation`snekfromright`,
    200,
    true
    )
    snekright.setScale(3, ScaleAnchor.Middle)
    snekright.setVelocity(200, 200)
    snekright.follow(targetright, 100)
}
if (randint(1, 4) == 4) {
    snekdown = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snekdown, assets.tile`myTile15`)
    animation.runImageAnimation(
    snekdown,
    assets.animation`snekfromdown`,
    200,
    true
    )
    snekdown.setScale(3, ScaleAnchor.Middle)
    snekdown.setVelocity(200, 200)
    snekdown.follow(snekdown, 100)
}
if (randint(5, 8) == 1) {
    tall = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(tall, assets.tile`myTile8`)
    animation.runImageAnimation(
    tall,
    assets.animation`tallboifromtop`,
    200,
    true
    )
    tall.setScale(3, ScaleAnchor.Middle)
    tall.setVelocity(200, 200)
    tall.follow(tarketup, 100)
}
/**
 * move speed
 */
forever(function () {
    controller.moveSprite(mySprite, 80, 80)
})
