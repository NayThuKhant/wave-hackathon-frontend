document.addEventListener('DOMContentLoaded', function () {
    try {
        const sdk = new WaveJsSDK();
        sdk.init({clientId: 'wave-money'});
    } catch (e) {
        console.log(e);
    }
});

