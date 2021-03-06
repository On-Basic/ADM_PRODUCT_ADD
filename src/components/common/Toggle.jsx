import React from "react";
import styled from "styled-components";
import { PALLETS } from "../../style/theme";

const Toggle = ({ isToggled, onToggle, ...props }) => {
  return (
    <ToggleContainer>
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        {...props}
      />
      <ToggleSpan />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 15px;

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + span::before {
    transform: translateX(15px);
    background-color: ${PALLETS.PURPLE};
  }

  input[type="checkbox"]:checked + span {
    background-color: ${PALLETS.LIGHTPURPLE};
  }
`;

const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${PALLETS.GRAY};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  ::before {
    position: absolute;
    content: "";
    left: 0;
    top: -3px;
    width: 21px;
    height: 21px;
    background-color: ${PALLETS.BEIGE};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.1);
  }
`;
