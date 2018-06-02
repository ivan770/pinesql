if(settings.has('settings_build') === true){
  if(typeof settings.get('settings_build') === "boolean"){
    if(settings.get('settings_build') === true){
      buildButton.style.display = "inline"
    } else {
      buildButton.style.display = "none"
    }
  }
}

if(settings.has('settings_functiontime') === true){
  if(typeof settings.get('settings_functiontime') === "boolean"){
    if(settings.get('settings_functiontime') === true){
      exectime.style.display = "inline"
    } else {
      exectime.style.display = "none"
    }
  }
}

if(settings.has('settings_developer') === true){
  if(typeof settings.get('settings_developer') === "boolean"){
    if(settings.get('settings_developer') === true){
      ipc.send('developer')
    }
  }
}
