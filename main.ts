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
if (randint(1, 4) == 1) {
    snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snek, assets.tile`myTile12`)
    animation.runImageAnimation(
    snek,
    assets.animation`snekfromup`,
    200,
    true
    )
    snek.setVelocity(200, 200)
    snek.follow(tarketup, 100)
}
forever(function () {
    controller.moveSprite(mySprite, 80, 80)
})
