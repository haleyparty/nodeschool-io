var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

var size = process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) throw err
  var prices = db.collection('prices')
  prices.aggregate([
    { $match: {
      size: size
    }}
    , { $group: {
      _id: 'total'
      , total: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err
    var x = results[0]
    console.log(Number(x.total).toFixed(2))
    db.close()
  })
})
