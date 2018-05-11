function connect(host, user, password) {
  var con = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`
  });

  con.connect(function(err) {
    if (err){
      appendLog(err.stack)
      appendLog("Check console for additional details (F12)")
      throw err;
    }else{
    appendLog("Connected")
  }
  });
}
