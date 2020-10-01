import React from "react";
import Control from "./Control";

const Features = props => {
  const { controls, featureKey } = props;

    renderContent = (<pre>{JSON.stringify(controls, null, 2)}</pre>
   
    );
  }

  return <>{renderContent}</>;
};

export default Features;
