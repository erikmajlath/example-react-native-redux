var t9 = require('node-t9');

var appRouter = function(app) {
 
  // T9 lookup route
  app.get("/t9/:number", function(req, res) {
    t9.lookup(req.params.number + '$', function(matches){
      res.json(matches);
    });
  });

}
 
module.exports = appRouter;