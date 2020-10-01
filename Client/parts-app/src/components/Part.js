import React from "react";
import Feature from "./Feature";
import GLOBAL from "../services/global";

const Part = props => {
  const { features, partName } = props;

  const renderListOfFeatures =
    features?.length > 0 ? (
      features.map(feature => {
        return (
          <div key={`${partName}.${feature.name}`} className="feature">
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
