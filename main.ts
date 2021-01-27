while (true) {
    console.log("Rotation Level:" + input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 10) {
        light.setAll(light.rgb(255, 255, 255))
        pause(3000)
        light.clear()
        pause(1000)
    } else {
        light.showAnimation(light.rainbowAnimation, 500)
    }
    
    console.log("Directional Level:" + input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.Y) < 5) {
        music.magicWand.playUntilDone()
    } else {
        music.siren.playUntilDone()
    }
    
}
