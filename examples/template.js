app = new App("username/repo","main",{"tmplpt":"folderwithtemplates","fspt":"files"})
// new App("username/repo",branch,options)
function loadtmplt(args){
    // you can put the argument 'args' in any function to get arguments such as
    // https://example.com?x=1
    // args.get("x")
    // returns a URLSearchParams object
    // you can play around with LocalStorage & document.cookie as well
    var tm = app.templater()
    return tm.load_template("nameoffile",{"x":args.get("x")})
    // tm.load_template(file,vars), vars is a dictionary of any variables you want to pass onto the template


}
/* example template:
<html>
<span>{{x}}</span>

</html>
*/

/* example output: for https://example.com?x=1
<html>
<span>1</span>

</html>
*/

app.route("mytemplate",loadtmplt)
app.run()