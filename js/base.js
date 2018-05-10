function appendLog(text) {
  const currentText = log.value
  log.value = text + "\n" + currentText
  M.textareaAutoResize($('#log'));
}
