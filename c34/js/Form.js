class Form {
constructor(){

}
display(){
var title=createElement("h2")
title.html("Car racing")
title.position(130,0)
var input=createInput("name")
input.position(130,160)
var button=createButton("play")
button.position(250,200)
var greeting=createElement("h2")
button.mousePressed(function() {
input.hide()
button.hide()
var name=input.value()
playercount+=1
player.update(name)
player.updatecount(playercount)
greeting.html("Hi"+name)
greeting.position(130,160)
})
}
}