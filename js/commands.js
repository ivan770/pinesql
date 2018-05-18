function connect(host, user, password) {
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
}

function query(host, user, password, query) {
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
                        }
                    })
                }
            })
        }
    })
}

function querydb(host, user, password, query, database) {
    var con = mysql.createConnection({
        host: `${host}`,
        user: `${user}`,
        password: `${password}`,
        database: `${database}`
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
                            appendLog('Result(JSON): ' + JSON.stringify(result), 'QUERYDB')
                        }
                    })
                }
            })
        }
    })
}

function ping(host, user, password) {
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
                }
            })
        }
    })
}
