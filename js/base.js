function appendLog(text, prefix) {
    const currentText = log.value
    log.value = `<${prefix}> ${text}\n\n${currentText}`
    M.textareaAutoResize($('#log'))
}

function updateCheck(){
  request({
    url: 'https://api.github.com/repos/ivan770/pinesql/releases/latest',
    headers: {
      'User-Agent': 'pinesql-updater'
    }
  }, function (error, response, body) {
        if (!error) {
          if (compareVersions(`${pjson.version}`, `${JSON.parse(body).tag_name}`) == -1){
            appendLog(`New version available: ${JSON.parse(body).tag_name}`, "UPDATE")
            appendLog(`Changes: \n${JSON.parse(body).body}`, "UPDATE")
          }
        } else {
          appendLog("Connection error", "UPDATE")
        }
      });
}
