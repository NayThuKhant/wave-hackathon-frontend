export default function () {
    const activeName = ref('first')
    const users = ref([
        {
            id: 1,
            workerName: "John Doe",
            service: "Laundry Service",
            price: "10,000",
            date: "9 Oct 2023",
            image: "/images/laundry.svg",
        },
        {
            id: 2,
            workerName: "Alice Smith",
            service: "Cleaning Service",
            price: "7,500",
            date: "9 Sep 2023",
            image: "/images/cleaning.svg",
        },
        {
            id: 3,
            workerName: "Bob Johnson",
            service: "Gardening Service",
            price: "12,000",
            date: "9 Nov 2023",
            image: "/images/laundry.svg",
        },
    ]);

    const handleClick = (tab, event) => {
        console.log(tab, event)
    }

    const formatDate = (date) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    return {
        users,
        formatDate,
        handleClick,
        activeName
    }
}