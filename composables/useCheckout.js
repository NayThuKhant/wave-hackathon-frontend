export default function () {
  const drawer = ref(false);
  const address = ref("Select your address");
  const radio = ref([
    {
      value: "Option1",
      label: "Use Current Location",
    },
    {
      value: "Option2",
      label: "No (24), 40th Street, Botahtaung, Yangon",
    },
    {
      value: "Option3",
      label: "No (24), 49 Street, Botahtaung Township, Yangon",
    },
  ]);
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  const selectedRadio = ref("Option1");

  const form = reactive({
    floor: "",
    street: "",
    city: "",
    township: "",
    delivery: false,
    type: [],
    resource: "",
    desc: "",
  });
  const cities = ref([
    {
      value: "Yangon",
      label: "Yangon",
    },
    {
      value: "Bago",
      label: "Bago",
    },
    {
      value: "Mandalay",
      label: "Mandalay",
    },
  ]);
  const townships = ref([
    {
      value: "Yangon",
      label: "Yangon",
    },
    {
      value: "Bago",
      label: "Bago",
    },
    {
      value: "Mandalay",
      label: "Mandalay",
    },
  ]);
  return {
    toggleDrawer,
    drawer,
    townships,
    cities,
    form,
    radio,
    address,
    selectedRadio,
  };
}
