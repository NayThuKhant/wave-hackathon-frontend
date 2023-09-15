document.addEventListener('DOMContentLoaded', function () {
    try {
        const sdk = new WaveJsSDK();
        sdk.init({clientId: 'wave-money'});
        // REMOVE
        alert("initialized")
    } catch (e) {
        alert("This app is only for Wave Money Mini Apps and will not work on browsers. However, we can let you use this app with sample account we set up.")
        console.log(e);
    }
});

