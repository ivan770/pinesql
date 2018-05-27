/* function connect(host, user, password) {
    var con = mysql.createConnection({
        host: `${host}`,
        user: `${user}`,
        password: `${password}`
    })

    con.connect(function(err) {
        if (err) {
            appendLog(err, 'ERROR')
            appendLog('Check console for additional details (F12)', 'ERROR')
            throw err
        } else {
            appendLog('Connected', 'CONNECT')
        }
    })
} */
function query(host, user, password, query, port) {
    let exec0
    let exec1
    exec0 = performance.now()
    var con = mysql.createConnection({
        host: `${host}`,
        user: `${user}`,
        password: `${password}`,
        port: `${port}`
    })

    con.connect(function(err) {
        if (err) {
            appendLog(err, 'ERROR')
            appendLog('Check console for additional details (F12)', 'ERROR')
            throw err
        } else {
            appendLog('Connected', 'QUERY')
            var t0 = performance.now();
            con.ping(function(err) {
                if (err) {
                    appendLog(err, 'ERROR')
                    appendLog('Check console for additional details (F12)', 'ERROR')
                    throw err
                } else {
                    var t1 = performance.now();
                    appendLog('Server responded.', 'PING')
                    pingObj.innerText = "Ping: " + Math.round((t1 - t0)) + " ms";
                    con.query(query, function(err, result) {
                        if (err) {
                            appendLog(err, 'ERROR')
                            appendLog('Check console for additional details (F12)', 'ERROR')
                            throw err
                        } else {
                            appendLog('Result(JSON): ' + JSON.stringify(result), 'QUERY')
                            exec1 = performance.now()
                            exectime.innerText = "query: " + Math.round((exec1 - exec0)) + " ms";
                        }
                    })
                }
            })
        }
    })
}

function querydb(host, user, password, query, database, port, build) {
  let exec0
  let exec1
  exec0 = performance.now()
    var con = mysql.createConnection({
        host: `${host}`,
        user: `${user}`,
        password: `${password}`,
        database: `${database}`,
        port: `${port}`
    })

    con.connect(function(err) {
        if (err) {
            appendLog(err, 'ERROR')
            appendLog('Check console for additional details (F12)', 'ERROR')
            throw err
        } else {
            appendLog('Connected', 'QUERYDB')
            var t0 = performance.now();
            con.ping(function(err) {
                if (err) {
                    appendLog(err, 'ERROR')
                    appendLog('Check console for additional details (F12)', 'ERROR')
                    throw err
                } else {
                    var t1 = performance.now();
                    appendLog('Server responded.', 'PING')
                    pingObj.innerText = "Ping: " + Math.round((t1 - t0)) + " ms";
                    con.query(query, function(err, result) {
                        if (err) {
                            appendLog(err, 'ERROR')
                            appendLog('Check console for additional details (F12)', 'ERROR')
                            throw err
                        } else {
                            if (build == 1) {
                              ipc.send("build_clear")
                                Object.keys(result).forEach(function(key) {
                                    var row = result[key];
                                    Object.keys(row).forEach(function(key) {
                                        // appendLog(key + ' // ' + row[key], "BUILD");
                                        ipc.send("build", key, row[key])
                                    });
                                });
                                appendLog("Build completed!", "BUILD")
                                exec1 = performance.now()
                                exectime.innerText = "query: " + Math.round((exec1 - exec0)) + " ms";
                            } else {
                                appendLog('Result(JSON): ' + JSON.stringify(result), 'QUERYDB')
                                exec1 = performance.now()
                                exectime.innerText = "querydb: " + Math.round((exec1 - exec0)) + " ms";
                            }
                        }
                    })
                }
            })
        }
    })
}

function ping(host, user, password, port) {
  let exec0
  let exec1
  exec0 = performance.now()
    var con = mysql.createConnection({
        host: `${host}`,
        user: `${user}`,
        password: `${password}`,
        port: `${port}`
    })

    con.connect(function(err) {
        if (err) {
            appendLog(err, 'ERROR')
            appendLog('Check console for additional details (F12)', 'ERROR')
            throw err
        } else {
            appendLog('Connected', 'PING')
            var t0 = performance.now();
            con.ping(function(err) {
                if (err) {
                    appendLog(err, 'ERROR')
                    appendLog('Check console for additional details (F12)', 'ERROR')
                    throw err
                } else {
                    var t1 = performance.now();
                    appendLog('Server responded.', 'PING')
                    pingObj.innerText = "Ping: " + Math.round((t1 - t0)) + " ms";
                    exec1 = performance.now()
                    exectime.innerText = "ping: " + Math.round((exec1 - exec0)) + " ms";
                }
            })
        }
    })
}
