import Chartist from "chartist";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

export default class PieChart extends PureComponent {
  static propTypes = {
    pieParts: PropTypes.array.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div
        ref={c => {
          this.chart = c;
        }}
        className="semi-transparent ct-chart ct-major-eleventh"
      />
    );
  }

  componentDidUpdate() {
    new Chartist.Pie(
      this.chart,
      {
        series: this.props.pieParts,
      },
      {
        donut: true,
        donutWidth: 30,
        startAngle: 0,
        total: 1,
        showLabel: false,
      },
    );
  }
}
