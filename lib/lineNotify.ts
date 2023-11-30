export const lineNotify = (message: any) => {
    const params = new URLSearchParams({
        message: message,
    });
    fetch("/api/send_notify?" + params.toString(), {
        headers: { 'Authorization': `Bearer: ${process.env.LINE_NOTIFY_TOKEN}` }
    })
}
