import DBSLogo from "../assets/company-logos/DBSLogo.png";
import ProudfootLogo from "../assets/company-logos/ProudfootLogo.png";
import RMILogo from "../assets/company-logos/RMILogo.png";

export const getClients = () => {
  const clients = [
    {
      id: 1,
      logo: DBSLogo,
      name: "DBS Bank",
      description:
        "DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.",
    },
    {
      id: 2,
      logo: ProudfootLogo,
      name: "Proudfoot",
      description:
        "Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.",
    },
    {
      id: 3,
      logo: RMILogo,
      name: "RMI",
      description:
        "RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.",
    },
  ];

  return clients;
};
