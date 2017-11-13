const {
    START_NOTIFICATION_SERVICE,
    NOTIFICATION_SERVICE_STARTED,
    NOTIFICATION_SERVICE_ERROR,
    NOTIFICATION_RECEIVED,
    TOKEN_UPDATED,
} = require('electron-push-receiver');

// Listen for service successfully started
ipcRenderer.on(NOTIFICATION_SERVICE_STARTED, (_, token) => {
    console.log('NOTIFICATION_SERVICE_STARTED', token);
});// do something);
// Handle notification errors
ipcRenderer.on(NOTIFICATION_SERVICE_ERROR, (_, error) => {
    console.log('NOTIFICATION_SERVICE_ERROR');
    
});// do something);
// Send FCM token to backend
ipcRenderer.on(TOKEN_UPDATED, (_, token) => {
    console.log('TOKEN_UPDATED');
    
});// Send token);
// Display notification
ipcRenderer.on(NOTIFICATION_RECEIVED, (_, { notification }) => {
    const { title = '알림', body = '알림이 도착하였습니다.', click_action } = notification;
    console.log('NOTIFICATION_RECEIVED', title, body, click_action);
    let myNotification = new Notification(
        title,
        {
            body,
        }
    )

    myNotification.onclick = () => {
        console.log('Notification clicked', click_action);
        if (click_action) {
            shell.openExternal(click_action);
        }
    }

});// display notification);
// Start service
ipcRenderer.send(START_NOTIFICATION_SERVICE, '382621349281');