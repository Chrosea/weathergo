import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import paperStyle from "../Weather";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import moment from "moment";

const forecastStyle = {
  marginRight: 20
};
class Forecast extends Component {
  render() {
    console.log(this.props);
    const daily = this.props.forecasts.forecastday;

    const days = daily.map(forecast => (
      <Grid item xs={2} key={forecast.date_epoch}>
        <Paper
          style={{
            margin: 10,
            padding: 20,
            minHeight: 180,
            minWidth: 70
          }}
        >
          <div>
            <div>{moment.unix(forecast.date_epoch).format("dddd")}</div>
            <img source={"http:" + forecast.day.condition.icon} alt="pic" />
            <p>{forecast.day.condition.text}</p>
          </div>
          <div>
            {forecast.day.mintemp_c}°C~{forecast.day.maxtemp_c}°C
          </div>
        </Paper>
      </Grid>
    ));
    return (
      //<Paper sm={10}>
      <Grid container spacing={16} justify="center" alignItems="center">
        {days}
      </Grid>
      //</Paper>
    );
  }
}

export default Forecast;
