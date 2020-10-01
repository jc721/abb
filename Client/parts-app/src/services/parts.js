import GLOBAL from "./global";

const { partsURL } = GLOBAL;

const parts = {
  getParts: () =>
    fetch(partsURL)
      .then(response => response.json())
      .then(parts => {
        return parts;
      })
};

export default parts;
