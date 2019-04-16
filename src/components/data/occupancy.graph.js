import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

import { toNumerical } from "../../utils/graphs.utils";
import {
  getOccupancyData,
  getOccupancyDataError
} from "../../selectors/price.selectors";
import { getOccupancyDataLoading } from "../../selectors/loading.selectors";
import { requestOccupancyData } from "../../actions/price.actions";

const generateGraph = occupancyData => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Occupancy",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10
      }
    ]
  };

  data.datasets[0].data = toNumerical(occupancyData.y_axis);
  data.labels = occupancyData.x_axis;

  console.log(data, data.labels.length, data.datasets[0].data.length);

  return <Line data={data} />;
};

const OccupancyGraph = ({
  occupancyData,
  isOccupancyDataLoading,
  occupancyDataErrorMessage,
  requestOccupancyData
}) => {
  useEffect(() => {
    requestOccupancyData();
  }, []);

  return (
    <div>
      <h2>Occupancy Curve</h2>
      {isOccupancyDataLoading || !occupancyData
        ? "graph loading..."
        : generateGraph(occupancyData)}
    </div>
  );
};

const mapStateToProps = state => ({
  occupancyData: getOccupancyData(state),
  isOccupancyDataLoading: getOccupancyDataLoading(state),
  occupancyDataErrorMessage: getOccupancyDataError(state)
});

const mapDispatchToProps = dispatch => ({
  requestOccupancyData: () => dispatch(requestOccupancyData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OccupancyGraph);
