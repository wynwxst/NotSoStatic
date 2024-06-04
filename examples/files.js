app = new App("username/repo","main",{"tmplpt":"templates","fspt":"thedirectoryyourwanttoreadfilesfromhere"})
// new App("username/repo",branch,options)
// app.fm is the already initialised file manager!
app.fm.findroutes() // returns json dict of filename:sha
app.fm.fetchfile("pathtofilefrom fspt folder",json=false) // mark json false if it's not json
// other methods can be found in nss.js itself :)
// I would suggest not using the write function just yet!
