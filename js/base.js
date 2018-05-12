function appendLog(text, prefix) {
  const currentText = log.value
  log.value = `<${prefix}> ${text}\n\n${currentText}`
  M.textareaAutoResize($('#log'));
}
