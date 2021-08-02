import React from "react";
import Amp from "./amp";
import Anz from "./anz";
import CommonwealthBank from "./commonwealthBank";
import George from "./george";
import Hsbc from "./hsbc";
import Ing from "./ing";
import Macquarie from "./macquarie";
import Westpac from "./westpac";

export default function SvgIcon({ icon }: SvgIconProps) {
  return <>{displaySvg(icon)}</>;
}

function displaySvg(icon) {
  switch (icon) {
    case "hsbc": {
      return <Hsbc />;
    }
    case "westpac": {
      return <Westpac />;
    }
    case "commonwealthbank": {
      return <CommonwealthBank />;
    }
    case "amp": {
      return <Amp />;
    }
    case "macquarie": {
      return <Macquarie />;
    }
    case "ing": {
      return <Ing />;
    }
    case "george": {
      return <George />;
    }
    case "anz": {
      return <Anz />;
    }
    default:
      return null;
  }
}

interface SvgIconProps {
  icon: string;
}
