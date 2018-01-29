const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const geoLocate = require('./routes/geo-locate.js')

const PORT = process.env.PORT || 3001;



// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded());
app.use(cors());
app.use('api/v1/geo', geoLocate)


app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    res.send('NOT FOUND');
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json(err);
    console.error(err);
  });


app.listen(PORT, () => console.log(`listening on port ${PORT}`));