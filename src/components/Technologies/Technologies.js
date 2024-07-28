import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { iconsData } from "./icons";

const Technologies = () => {
  return (
    <TechnologiesContainer id="skills">
      <TechnologiesHeader>FIELD OF EXPERTISE</TechnologiesHeader>
      <TechnologiesHeader>STEAM BOILERS</TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <a href={iconData.href} key={iconData.id} target={"_blank"}>
              <TechnologyIcon
                key={iconData.id}
                src={iconData.icon}
                alt={iconData.name}
                title={iconData.name}
                {...iconData}
              />
            </a>
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
