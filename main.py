while True:
    print("Rotation Level:" + input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) > 10:
        light.set_all(light.rgb (255, 255, 255))
        pause(3000)
        light.clear()
        pause(1000)
    else:
        light.show_animation(light.rainbowAnimation, 500)
    print("Directional Level:" + input.acceleration(Dimension.Y))
    if input.acceleration(Dimension.Y) < 5:
        music.magic_wand.play_until_done()
    else:
        music.siren.play_until_done()

