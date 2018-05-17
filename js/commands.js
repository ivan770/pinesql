function connect (host, user, password) {
  var con = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`
  })

  con.connect(function (err) {
    if (err) {
      appendLog(err, 'ERROR')
      appendLog('Check console for additional details (F12)', 'ERROR')
      throw err
    } else {
      appendLog('Connected', 'CONNECT')
    }
  })
}

function query (host, user, password, query) {
  var con = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`
  })

  con.connect(function (err) {
    if (err) {
      appendLog(err, 'ERROR')
      appendLog('Check console for additional details (F12)', 'ERROR')
      throw err
    } else {
      appendLog('Connected', 'QUERY')
      con.query(query, function (err, result) {
        if (err) {
          appendLog(err, 'ERROR')
          appendLog('Check console for additional details (F12)', 'ERROR')
          throw err
        } else {
          appendLog('Result(JSON): ' + JSON.stringify(result), 'QUERY')
        }
      })
    }
  })
}

function querydb (host, user, password, query, database) {
  var con = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`,
    database: `${database}`
  })

  con.connect(function (err) {
    if (err) {
      appendLog(err, 'ERROR')
      appendLog('Check console for additional details (F12)', 'ERROR')
      throw err
    } else {
      appendLog('Connected', 'QUERYDB')
      con.query(query, function (err, result) {
        if (err) {
          appendLog(err, 'ERROR')
          appendLog('Check console for additional details (F12)', 'ERROR')
          throw err
        } else {
          appendLog('Result(JSON): ' + JSON.stringify(result), 'QUERYDB')
        }
      })
    }
  })
}

function ping (host, user, password) {
  var con = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`
  })

  con.connect(function (err) {
    if (err) {
      appendLog(err, 'ERROR')
      appendLog('Check console for additional details (F12)', 'ERROR')
      throw err
    } else {
      appendLog('Connected', 'PING')
    }
  })

  con.ping(function (err) {
    if (err) {
      appendLog(err, 'ERROR')
      appendLog('Check console for additional details (F12)', 'ERROR')
      throw err
    } else {
      appendLog('Server responded.', 'PING')
    }
  })
}
