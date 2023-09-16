export default function () {
    const ensureWaveUserIsLoggedIn = async () => {
        const response = await window.WaveJsSDK.userModule?.getUserLoginStatus()
        const loginStatus = response?.response.data.is_logged_in

        if (!loginStatus) alert("Please login to your wave money account to use this app. We will be using sample account since we cannot fetch the user information from your account")
    }

    const getWaveUserInformation = async () => {
        await ensureWaveUserIsLoggedIn()
        const response = await window.WaveJsSDK.userModule?.getUserInformation()
        const data = response?.response.data
        if (data) {
            const {name, dob, gender, msisdn, nrc, kyc_status} = data
            return {name, dob, gender, msisdn, nrc, kyc_status}
        }

        // TODO default value for testing without wave money sdk
        return {
            msisdn: '09123456789',
            name: 'Nay Thu Khant',
            dob: '2000-01-01',
            nrc: '12/KhaYaNa(N)123456',
            gender: 'Male',
            kyc_status: 'LEVEL_2'
        }
    }

    const getWaveUserDevice = async () => {
        await ensureWaveUserIsLoggedIn()
        const response = await window.WaveJsSDK.deviceModule?.getDeviceInformation()
        const data = response?.response.data

        if (data) return data

        // TODO default value for testing without wave money sdk
        return {
            base: 1,
            board: "Sample Board",
            brand: "Sample Brand",
            fingerPrint: "Sample Fingerprint",
            host: "Sample Host",
            id: "Sample ID",
            incremental: "Sample Incremental",
            manufacture: "Sample Manufacture",
            model: "Sample Model",
            sdk: 1.0,
            type: "Sample Type",
            user: "Sample User",
            version: 2.1
        }
    }

    const shutDownAppFromWave = async () => {
        await ensureWaveUserIsLoggedIn()
        const response = await window.WaveJsSDK.viewModule?.exit()

        return response?.response.data
    }

    const makePayment = async (amount, receiverMsisdn) => {

        // TODO default value for testing without wave money sdk
        if (!amount && !receiverMsisdn && !orderId) {
            amount = 1000
            receiverMsisdn = '9784489866'

        }
        const orderId = (Math.random() + 1).toString(36).substring(2);

        await ensureWaveUserIsLoggedIn()
        const response = await window.WaveJsSDK.paymentModule?.makePayment(amount, receiverMsisdn, orderId)
        const data = response?.response.data

        if (data) return data

        // TODO default value for testing without wave money sdk
        return {
            "transactionId": "123456789",
            "transactionDate": "2021-09-01 18:23",
        }
    }

    const getWaveUserLocation = async () => {
        // REMOVE
        alert("TEST");
        await ensureWaveUserIsLoggedIn()
        alert("LOGGED IN");
        //const response = await window.WaveJsSDK.locationModule?.getCurrentPosition()
        await window.WaveJsSDK.locationModule?.getCurrentPosition().then((response) => {alert(response);}).catch((error) => {alert(error);});
        // REMOVE
        alert(response);
        const data = response?.response.data

        if (data) {
            // TODO - Interpret the lat lang value to address using google map api or something else, and return it properly
            // TODO - can't do it right now since it's paid version
        }

        // TODO default value for testing without wave money sdk
        return {
            "floor": "Dulwich, Golf Estate",
            "street": "Pun Hlaing Estate Avenue",
            "township": "Hlaing Thar Yar",
            "city": "Yangon"
        }
    }

    const getWaveUserWalletBalance = async () => {
        await ensureWaveUserIsLoggedIn()
        const response = await window.WaveJsSDK.paymentModule?.walletBalance()
        const data = response?.response.data

        // TODO default value for testing without wave money sdk
        return data ? data.amount : 500000;
    }


    return {
        ensureWaveUserIsLoggedIn,
        getWaveUserInformation,
        getWaveUserDevice,
        getWaveUserLocation,
        getWaveUserWalletBalance,
        shutDownAppFromWave,
        makePayment
    }
}
