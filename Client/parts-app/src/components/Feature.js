import React from "react";
import Control from "./Control";

const Features = props => {
  const { controls, featureKey } = props;
  const controlList = [];
  const numberOfControls = Object.keys(controls).length;

  if (controls && numberOfControls > 0) {
    for (const name in controls) {
      if (controls.hasOwnProperty(name)) {
        const control = controls[name];
        controlList.push({ name, dev: control.dev, devOutTotal: control.devOutTotal, status: control.status });
      }
    }
  }

  const buildList = list => {
    return list.map(control => {
      return (
        <div className="control">
          <Control key={`${featureKey}.${control.name}`} control={control} />
        </div>
      );
    });
  };

  const header = (
    <div className="control bold">
      <div className="alignLeft">Control</div>
      <div>Dev</div>
      <div>DevOutTotal</div>
      <div />
    </div>
  );

  let renderContent = <h2 data-testid="noFeaturesFound">No Features Found</h2>;

  if (controlList?.length > 0 && controlList?.length <= 12) {
    const list = buildList(controlList);
    renderContent = (
      <div className="controlListContent">
        {header}
        {list}
      </div>
    );
  } else if (controlList?.length > 12 && controlList?.length <= 24) {
    const listColumn1 = buildList(controlList.slice(0, 12));
    const listColumn2 = buildList(controlList.slice(12));

    renderContent = (
      <div>
        <div className="controlListContent twoColumns">
          {header}
          {listColumn1}
        </div>
        <div className="controlListContent twoColumns">
          {header}
          {listColumn2}
        </div>
      </div>
    );
  }

  return <>{renderContent}</>;
};

export default Features;
