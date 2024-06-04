app = new App("username/repo")
//example:
/* function ilikecats(){
    return "I like cats!!"

}
app.route("doyoulikecats",ilikecats)
*/
function whydoiexist(){
    return "idk either man"
}
app.route("1234/5678/910/why/just/why",whydoiexist)
app.run()