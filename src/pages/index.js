import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import BottomArea from "./BottomArea";

class Dashboard extends React.Component {
  async componentDidMount() {
    const { data } = await axios.get(
      "http://api.apixu.com/v1/current.json?key=bd0ce85646804bf2ac494702192301&q=Paris"
    );
    console.log(data);
  }

  render() {
    return (
      <Container>
        <WeatherDetails />
        <BottomArea />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Container>
    );
  }
}

export default Dashboard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
