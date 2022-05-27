/**
 * setting the enemies target
 */
/**
 * create and set snek1 target
 */
/**
 * create and set snek2 target
 */
/**
 * create and set snek3 target
 */
// create and set snek4 target
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    animation.runImageAnimation(
    gunup,
    assets.animation`gunupshoot0`,
    50,
    false
    )
    gunup = sprites.createProjectileFromSprite(assets.image`myImage8`, gunup, 0, -150)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -1
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim1`,
    200,
    true
    )
})
// movement keys
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite4, location4) {
    animation.runImageAnimation(
    gundown,
    assets.animation`gundownshoot`,
    50,
    false
    )
    projdown = sprites.createProjectileFromSprite(assets.image`myImage6`, projdown, 0, 150)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite2, location2) {
    animation.runImageAnimation(
    gunright,
    assets.animation`gunrightshoot`,
    50,
    false
    )
    projright = sprites.createProjectileFromSprite(assets.image`myImage`, gunright, 150, 0)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite3, location3) {
    animation.runImageAnimation(
    gunleft,
    assets.animation`gunrightshoot0`,
    50,
    false
    )
    projleft = sprites.createProjectileFromSprite(assets.image`myImage5`, gunleft, -150, 0)
})
let tallright: Sprite = null
let talleft: Sprite = null
let talldown: Sprite = null
let tall: Sprite = null
let snekdown: Sprite = null
let snekright: Sprite = null
let snekleft: Sprite = null
let snek: Sprite = null
let projleft: Sprite = null
let projright: Sprite = null
let projdown: Sprite = null
let gunleft: Sprite = null
let gundown: Sprite = null
let gunright: Sprite = null
let gunup: Sprite = null
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
gunup = sprites.create(assets.image`gunup`, SpriteKind.Food)
gunright = sprites.create(assets.image`gunright`, SpriteKind.Food)
gundown = sprites.create(assets.image`gundown`, SpriteKind.Food)
gunleft = sprites.create(assets.image`gunleft`, SpriteKind.Food)
tiles.placeOnRandomTile(gundown, assets.tile`myTile17`)
tiles.placeOnRandomTile(gunleft, assets.tile`myTile16`)
tiles.placeOnRandomTile(gunright, assets.tile`myTile18`)
tiles.placeOnRandomTile(gunup, assets.tile`myTile19`)
gundown.setScale(1.5, ScaleAnchor.Top)
gunleft.setScale(1.5, ScaleAnchor.Right)
gunright.setScale(1.5, ScaleAnchor.Left)
gunup.setScale(1.5, ScaleAnchor.Bottom)
let projectileup = sprites.createProjectileFromSprite(assets.image`myImage8`, gunup, 50, 50)
projdown = sprites.createProjectileFromSprite(assets.image`myImage6`, gundown, 50, 50)
projright = sprites.createProjectileFromSprite(assets.image`myImage`, gunright, 50, 50)
projleft = sprites.createProjectileFromSprite(assets.image`myImage5`, gunleft, 50, 50)
// move speed
forever(function () {
    controller.moveSprite(mySprite, 80, 80)
})
forever(function () {
    if (randint(1, 4) == 1) {
        snek = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snek, assets.tile`myTile12`)
        animation.runImageAnimation(
        snek,
        assets.animation`snekfromup`,
        200,
        true
        )
        snek.setScale(3, ScaleAnchor.Bottom)
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
        snekleft.setScale(3, ScaleAnchor.Right)
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
        snekright.setScale(3, ScaleAnchor.Left)
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
        snekdown.setScale(3, ScaleAnchor.Top)
        snekdown.setVelocity(200, 200)
        snekdown.follow(targetdown, 100)
    }
    if (randint(5, 8) == 5) {
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
    if (randint(5, 8) == 6) {
        talldown = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(targetdown, assets.tile`myTile8`)
        animation.runImageAnimation(
        talldown,
        assets.animation`tallboifrombottom`,
        200,
        true
        )
        talldown.setScale(3, ScaleAnchor.Middle)
        talldown.setVelocity(200, 200)
        talldown.follow(targetdown, 100)
    }
    if (randint(5, 8) == 7) {
        talleft = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(talleft, assets.tile`myTile8`)
        animation.runImageAnimation(
        talleft,
        assets.animation`tallboifromright`,
        200,
        true
        )
        talleft.setScale(3, ScaleAnchor.Middle)
        talleft.setVelocity(200, 200)
        talleft.follow(targetleft, 100)
    }
    if (randint(5, 8) == 8) {
        tallright = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(tallright, assets.tile`myTile8`)
        animation.runImageAnimation(
        tallright,
        assets.animation`tallboifromright`,
        200,
        true
        )
        tallright.setScale(3, ScaleAnchor.Middle)
        tallright.setVelocity(200, 200)
        tallright.follow(targetright, 100)
    }
    if (snek.overlapsWith(tarketup)) {
        game.over(false)
    }
    if (snekleft.overlapsWith(targetleft)) {
        game.over(false)
    }
    if (snekright.overlapsWith(targetright)) {
        game.over(false)
    }
    if (snekdown.overlapsWith(targetdown)) {
        game.over(false)
    }
    if (projdown.overlapsWith(snekdown)) {
        snekdown.destroy(effects.ashes, 500)
    }
    if (projectileup.overlapsWith(snek)) {
        snek.destroy(effects.ashes, 500)
    }
    if (projright.overlapsWith(snekright)) {
        snekright.destroy(effects.ashes, 500)
    }
    if (projleft.overlapsWith(snekleft)) {
        snekleft.destroy(effects.ashes, 500)
    }
})
forever(function () {
	
})
