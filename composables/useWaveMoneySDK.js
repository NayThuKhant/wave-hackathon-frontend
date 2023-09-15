export default function () {
    const ensureWaveUserIsLoggedIn = async () => {
        const response = await window.WaveJsSDK.userModule?.getUserLoginStatus()
        // REMOVE
        alert(response.response);
        const loginStatus = response?.response.data.is_logged_in

        if (!loginStatus) alert("Please login to your wave money account to use this app. We will be using sample account since we cannot fetch the user information from your account")
    }

    const getWaveUserInformation = async () => {
        await ensureWaveUserIsLoggedIn()
        const response = await window.WaveJsSDK.userModule?.getUserInformation()
        const data = response?.response.data

        if (data) return {name, dob, gender, misisdn, nrc, kyc_status} = data

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

    const getWaveUserLocation = async () => {
        await ensureWaveUserIsLoggedIn()
        const response = await window.WaveJsSDK.locationModule?.getCurrentPosition()
        const data = response?.response.data

        if (data) {
            // TODO - Interpret the lat lang value to address using google map api or something else, and return it properly
            // TODO - can't do it right now since it's paid version
        }

        return {
            "floor": "Dulwich, Golf Estate",
            "street": "Pun Hlaing Estate Avenue",
            "township": "Hlaing Thar Yar",
            "city": "Yangon"
        }
    }


    return {
        ensureWaveUserIsLoggedIn,
        getWaveUserInformation,
        getWaveUserDevice,
        getWaveUserLocation
    }
}
