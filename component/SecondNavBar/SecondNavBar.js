import { Box } from "@mui/material";
import MenuItemS from "../MenuItem/MenuItem";
import Image from "next/image";

import logoPicture from "../../public/logo.png";

const dataForNav = [
  {
    nameNav: "ÜBER UNS",
    expandItemName: [
      "UNSERE GESCHICHTE",
      "DIE STIFTUNG",
      "AWARDS",
      "JAHRESBERICHT",
    ],
  },
  {
    nameNav: "ACADEMY / BOTSCHAFTER",
    expandItemName: ["FÖRDER-PROGRAMME", "FÖRDER-MÖGLICHKEITE"],
  },
  {
    nameNav: "ORGANISATION",
    expandItemName: ["TEAM", "VORSTAND", "PARTNER", "JOBS", "KONTAKT"],
  },
  {
    nameNav: "NEWS",
    expandItemName: ["AKTUELLES", "SOCIAL MEDIA", "SPORTS FOR GOOD"],
  },
  {
    nameNav: "SPENDEN",
    expandItemName: ["SPORTS FOR GOOD"],
  },
  { nameNav: "PODCAST", expandItemName: null },
  { nameNav: "PRESSE", expandItemName: null },
];

const SeconNavBar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%,",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          listStyle: "none",
          position: "relative",
          backgroundColor: "#181818",
          padding: "15px",
          height: "85px",
          fontSize: "10",
        }}
      >
        <Image width={100} height={100} src={logoPicture} alt="logo" />

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {dataForNav.map((item, index) => (
            <MenuItemS
              key={index}
              name={item.nameNav}
              expandItem={item.expandItemName}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SeconNavBar;
