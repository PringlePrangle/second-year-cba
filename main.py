"""

create and set snek1 target

"""
"""

create and set snek2 target

"""
"""

create and set snek3 target

"""
"""

create and set snek4 target

"""

def on_overlap_tile(sprite, location):
    animation.run_image_animation(gunup, assets.animation("""
        gunupshoot0
    """), 50, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile19
    """),
    on_overlap_tile)

def on_up_pressed():
    mySprite.y += -1
    animation.run_image_animation(mySprite, assets.animation("""
        myAnim1
    """), 200, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    mySprite.x += 1
    animation.run_image_animation(mySprite, assets.animation("""
        walkright
    """), 200, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile2(sprite2, location2):
    animation.run_image_animation(gunright,
        assets.animation("""
            gunrightshoot
        """),
        50,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile18
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    animation.run_image_animation(gunleft,
        assets.animation("""
            gunrightshoot0
        """),
        50,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
    """),
    on_overlap_tile3)

def on_right_pressed():
    mySprite.x += -1
    animation.run_image_animation(mySprite, assets.animation("""
        walkleft
    """), 200, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

"""

movement keys

"""

def on_overlap_tile4(sprite4, location4):
    animation.run_image_animation(gundown,
        assets.animation("""
            gundownshoot
        """),
        50,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile17
    """),
    on_overlap_tile4)

def on_down_pressed():
    mySprite.y += 1
    animation.run_image_animation(mySprite, assets.animation("""
        myAnim2
    """), 200, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile5(sprite5, location5):
    pass
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        transparency16
    """),
    on_overlap_tile5)

"""

setting the enemies target

"""
tall: Sprite = None
snekdown: Sprite = None
snekright: Sprite = None
snekleft: Sprite = None
snek: Sprite = None
gunleft: Sprite = None
gundown: Sprite = None
gunright: Sprite = None
gunup: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    player
"""), SpriteKind.player)
mySprite.set_scale(0.6, ScaleAnchor.MIDDLE)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
tiles.place_on_random_tile(mySprite, sprites.dungeon.floor_dark1)
scene.camera_follow_sprite(mySprite)
tarketup = sprites.create(assets.image("""
    targettop
"""), SpriteKind.food)
tiles.place_on_random_tile(tarketup, assets.tile("""
    myTile5
"""))
targetdown = sprites.create(assets.image("""
    targetdown
"""), SpriteKind.food)
tiles.place_on_random_tile(targetdown, assets.tile("""
    myTile7
"""))
targetleft = sprites.create(assets.image("""
    targetleft
"""), SpriteKind.food)
tiles.place_on_random_tile(targetleft, assets.tile("""
    myTile6
"""))
targetright = sprites.create(assets.image("""
    targetright
"""), SpriteKind.food)
tiles.place_on_random_tile(targetright, assets.tile("""
    myTile4
"""))
gunup = sprites.create(assets.image("""
    gunup
"""), SpriteKind.food)
gunright = sprites.create(assets.image("""
    gunright
"""), SpriteKind.food)
gundown = sprites.create(assets.image("""
    gundown
"""), SpriteKind.food)
gunleft = sprites.create(assets.image("""
    gunleft
"""), SpriteKind.food)
if randint(1, 4) == 1:
    snek = sprites.create(assets.image("""
        myImage0
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(snek, assets.tile("""
        myTile12
    """))
    animation.run_image_animation(snek, assets.animation("""
        snekfromup
    """), 200, True)
    snek.set_scale(3, ScaleAnchor.MIDDLE)
    snek.set_velocity(200, 200)
    snek.follow(tarketup, 100)
if randint(1, 4) == 2:
    snekleft = sprites.create(assets.image("""
        myImage0
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(snekleft, assets.tile("""
        myTile14
    """))
    animation.run_image_animation(snekleft,
        assets.animation("""
            snekfromleft
        """),
        200,
        True)
    snekleft.set_scale(3, ScaleAnchor.MIDDLE)
    snekleft.set_velocity(200, 200)
    snekleft.follow(targetleft, 100)
if randint(1, 4) == 3:
    snekright = sprites.create(assets.image("""
        myImage0
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(snekright, assets.tile("""
        myTile13
    """))
    animation.run_image_animation(snekright,
        assets.animation("""
            snekfromright
        """),
        200,
        True)
    snekright.set_scale(3, ScaleAnchor.MIDDLE)
    snekright.set_velocity(200, 200)
    snekright.follow(targetright, 100)
if randint(1, 4) == 4:
    snekdown = sprites.create(assets.image("""
        myImage0
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(snekdown, assets.tile("""
        myTile15
    """))
    animation.run_image_animation(snekdown,
        assets.animation("""
            snekfromdown
        """),
        200,
        True)
    snekdown.set_scale(3, ScaleAnchor.MIDDLE)
    snekdown.set_velocity(200, 200)
    snekdown.follow(snekdown, 100)
if randint(5, 8) == 1:
    tall = sprites.create(assets.image("""
        myImage3
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(tall, assets.tile("""
        myTile8
    """))
    animation.run_image_animation(tall,
        assets.animation("""
            tallboifromtop
        """),
        200,
        True)
    tall.set_scale(3, ScaleAnchor.MIDDLE)
    tall.set_velocity(200, 200)
    tall.follow(tarketup, 100)
"""

move speed

"""

def on_forever():
    controller.move_sprite(mySprite, 80, 80)
forever(on_forever)
