function connect(host, user, password) {
  var con = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`
  });

  con.connect(function(err) {
    if (err){
      appendLog(err)
      appendLog("Check console for additional details (F12)")
      throw err;
    }else{
    appendLog("Connected")
  }
  });
}

function query(host, user, password, query) {
  var con = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`
  });

  con.connect(function(err) {
    if (err){
      appendLog(err)
      appendLog("Check console for additional details (F12)")
      throw err;
    }else{
    appendLog("Connected")
  con.query(query, function (err, result) {
    if (err){
      appendLog(err)
      appendLog("Check console for additional details (F12)")
      throw err;
    }else{
      appendLog("Result(JSON): " + JSON.stringify(result));
    }
      });
    }
  });
}
