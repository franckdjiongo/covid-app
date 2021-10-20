const donneeInformation = (data) => {
  const [dataAll, dataYesterdayConfirmed, dataYesterdayDeaths] = data;

  return {
    typography1: {
      color: "grey.A400",
      name: "Total : ",
      content: dataAll.confirmed,
    },
    typography2: {
      color: "info.dark",
      name: "Actifs : ",
      content: dataAll.confirmed - dataAll.deaths,
    },
    typography3: {
      color: "success.dark",
      name: "Rétablis : ",
      content: dataAll.recovered,
    },
    typography4: {
      color: "error.dark",
      name: "Morts : ",
      content: dataAll.deaths,
    },
    typography5: {
      color: "warning.light",
      name: "Confirmés hier : ",
      content: dataYesterdayConfirmed,
    },
    typography6: {
      color: "error.light",
      name: "Morts hier : ",
      content: dataYesterdayDeaths,
    },
  };
};

export default donneeInformation;
