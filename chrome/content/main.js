function popup(title, text) {
    try {
      Components.classes['@mozilla.org/alerts-service;1']
                .getService(Components.interfaces.nsIAlertsService)
                .showAlertNotification(null, title, text, false, '', null);
    } catch(e) {
      // prevents runtime error on platforms that don't implement nsIAlertsService
    }
  }