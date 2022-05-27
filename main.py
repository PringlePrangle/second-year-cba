"""

setting the enemies target

"""
"""

create and set snek1 target

"""
"""

create and set snek2 target

"""
"""

create and set snek3 target

"""
# create and set snek4 target

def on_overlap_tile(sprite, location):
    global gunup
    animation.run_image_animation(gunup, assets.animation("""
        gunupshoot0
    """), 50, False)
    gunup = sprites.create_projectile_from_sprite(assets.image("""
        myImage8
    """), gunup, 0, -150)
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

# movement keys

def on_overlap_tile2(sprite4, location4):
    global projdown
    animation.run_image_animation(gundown,
        assets.animation("""
            gundownshoot
        """),
        50,
        False)
    projdown = sprites.create_projectile_from_sprite(assets.image("""
        myImage6
    """), projdown, 0, 150)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile17
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite2, location2):
    global projright
    animation.run_image_animation(gunright,
        assets.animation("""
            gunrightshoot
        """),
        50,
        False)
    projright = sprites.create_projectile_from_sprite(assets.image("""
        myImage
    """), gunright, 150, 0)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile18
    """),
    on_overlap_tile3)

def on_left_pressed():
    mySprite.x += 1
    animation.run_image_animation(mySprite, assets.animation("""
        walkright
    """), 200, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    mySprite.x += -1
    animation.run_image_animation(mySprite, assets.animation("""
        walkleft
    """), 200, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    mySprite.y += 1
    animation.run_image_animation(mySprite, assets.animation("""
        myAnim2
    """), 200, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile4(sprite3, location3):
    global projleft
    animation.run_image_animation(gunleft,
        assets.animation("""
            gunrightshoot0
        """),
        50,
        False)
    projleft = sprites.create_projectile_from_sprite(assets.image("""
        myImage5
    """), gunleft, -150, 0)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
    """),
    on_overlap_tile4)

tallright: Sprite = None
talleft: Sprite = None
talldown: Sprite = None
tall: Sprite = None
snekdown: Sprite = None
snekright: Sprite = None
snekleft: Sprite = None
snek: Sprite = None
projleft: Sprite = None
projright: Sprite = None
projdown: Sprite = None
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
tiles.place_on_random_tile(gundown, assets.tile("""
    myTile17
"""))
tiles.place_on_random_tile(gunleft, assets.tile("""
    myTile16
"""))
tiles.place_on_random_tile(gunright, assets.tile("""
    myTile18
"""))
tiles.place_on_random_tile(gunup, assets.tile("""
    myTile19
"""))
gundown.set_scale(1.5, ScaleAnchor.TOP)
gunleft.set_scale(1.5, ScaleAnchor.RIGHT)
gunright.set_scale(1.5, ScaleAnchor.LEFT)
gunup.set_scale(1.5, ScaleAnchor.BOTTOM)
projectileup = sprites.create_projectile_from_sprite(assets.image("""
    myImage8
"""), gunup, 50, 50)
projdown = sprites.create_projectile_from_sprite(assets.image("""
    myImage6
"""), gundown, 50, 50)
projright = sprites.create_projectile_from_sprite(assets.image("""
    myImage
"""), gunright, 50, 50)
projleft = sprites.create_projectile_from_sprite(assets.image("""
    myImage5
"""), gunleft, 50, 50)
# move speed

def on_forever():
    controller.move_sprite(mySprite, 80, 80)
forever(on_forever)

def on_forever2():
    global snek, snekleft, snekright, snekdown, tall, talldown, talleft, tallright
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
        snek.set_scale(3, ScaleAnchor.BOTTOM)
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
        snekleft.set_scale(3, ScaleAnchor.RIGHT)
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
        snekright.set_scale(3, ScaleAnchor.LEFT)
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
        snekdown.set_scale(3, ScaleAnchor.TOP)
        snekdown.set_velocity(200, 200)
        snekdown.follow(targetdown, 100)
    if randint(5, 8) == 5:
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
    if randint(5, 8) == 6:
        talldown = sprites.create(assets.image("""
            myImage3
        """), SpriteKind.enemy)
        tiles.place_on_random_tile(targetdown, assets.tile("""
            myTile8
        """))
        animation.run_image_animation(talldown,
            assets.animation("""
                tallboifrombottom
            """),
            200,
            True)
        talldown.set_scale(3, ScaleAnchor.MIDDLE)
        talldown.set_velocity(200, 200)
        talldown.follow(targetdown, 100)
    if randint(5, 8) == 7:
        talleft = sprites.create(assets.image("""
            myImage3
        """), SpriteKind.enemy)
        tiles.place_on_random_tile(talleft, assets.tile("""
            myTile8
        """))
        animation.run_image_animation(talleft,
            assets.animation("""
                tallboifromright
            """),
            200,
            True)
        talleft.set_scale(3, ScaleAnchor.MIDDLE)
        talleft.set_velocity(200, 200)
        talleft.follow(targetleft, 100)
    if randint(5, 8) == 8:
        tallright = sprites.create(assets.image("""
            myImage3
        """), SpriteKind.enemy)
        tiles.place_on_random_tile(tallright, assets.tile("""
            myTile8
        """))
        animation.run_image_animation(tallright,
            assets.animation("""
                tallboifromright
            """),
            200,
            True)
        tallright.set_scale(3, ScaleAnchor.MIDDLE)
        tallright.set_velocity(200, 200)
        tallright.follow(targetright, 100)
    if snek.overlaps_with(tarketup):
        game.over(False)
    if snekleft.overlaps_with(targetleft):
        game.over(False)
    if snekright.overlaps_with(targetright):
        game.over(False)
    if snekdown.overlaps_with(targetdown):
        game.over(False)
    if projdown.overlaps_with(snekdown):
        snekdown.destroy(effects.ashes, 500)
    if projectileup.overlaps_with(snek):
        snek.destroy(effects.ashes, 500)
    if projright.overlaps_with(snekright):
        snekright.destroy(effects.ashes, 500)
    if projleft.overlaps_with(snekleft):
        snekleft.destroy(effects.ashes, 500)
forever(on_forever2)

def on_forever3():
    pass
forever(on_forever3)
