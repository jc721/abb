import React from "react";
import Feature from "./Feature";
import GLOBAL from "../services/global";

const Part = props => {
  const { features, partName } = props;

  let gridSpaces = [0, 0, 0, 0, 0];

  const startFrom = limit => {
    let startAt = 0;
    for (let i = limit; i > 0; i--) {
      if (gridSpaces[i] < gridSpaces[i - 1]) {
        startAt = i;
        break;
      }
    }
    return startAt;
  };

  const whereToInsert = size => {
    let style = { gridColumn: "-1/-1", gridRow: "-1/-1" };
    let startAt;

    switch (size) {
      case GLOBAL.big:
        startAt = startFrom(GLOBAL.bigStartFrom);

        style = {
          gridColumn: `${startAt + 1}/${startAt + 3}`,
          gridRow: `${gridSpaces[startAt] + 1}/${gridSpaces[startAt] + 3}`
        };
        gridSpaces[startAt] = +2;
        gridSpaces[startAt + 1] = +2;
        break;

      case GLOBAL.medium:
        startAt = startFrom(GLOBAL.mediumStartFrom);

        style = {
          gridColumn: `${startAt + 1}/${startAt + 2}`,
          gridRow: `${gridSpaces[startAt] + 1}/${gridSpaces[startAt] + 3}`
        };
        gridSpaces[startAt] = +2;
        break;

      case GLOBAL.small:
        startAt = startFrom(GLOBAL.smallStartFrom);

        style = {
          gridColumn: `${startAt}/${startAt}`,
          gridRow: `${gridSpaces[startAt]}/${gridSpaces[startAt]}`
        };
        gridSpaces[startAt] = +1;
        break;

      default:
        break;
    }
    return style;
  };

  const calculateSpace = numberOfControls => {
    if (numberOfControls > 12 && numberOfControls <= 24) {
      const style = whereToInsert(GLOBAL.big);
      return style;
    }

    if (numberOfControls > 4 && numberOfControls <= 12) {
      const style = whereToInsert(GLOBAL.medium);
      return style;
    }

    if (numberOfControls <= 4) {
      const style = whereToInsert(GLOBAL.small);
      return style;
    }
  };

  const renderListOfFeatures =
    features?.length > 0 ? (
      features.map(feature => {
        const numberOfControls = Object.keys(feature.controls).length;
        const classCalculated = calculateSpace(numberOfControls);

        return (
          <div key={`${partName}.${feature.name}`} className="feature" style={classCalculated}>
            <div className={`${feature.status} header`}>
              <div className="bold">
                {feature.name} {GLOBAL[feature.status + "Icon"]}
              </div>
            </div>
            <Feature featureKey={`${partName}.${feature.name}`} controls={feature.controls} />
          </div>
        );
      })
    ) : (
      <h2 data-testid="noFeaturesFound">No Features Found</h2>
    );

  return <>{renderListOfFeatures}</>;
};

export default Part;
