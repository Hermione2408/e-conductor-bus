import React, { Component } from "react";
import db from "./firebase";
import { getDatabase, ref, child, get } from "firebase/database";
import UserLocation from "./map";
import BarGraph from "./react-bar-graph";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setInterval(() => {
      let dbRef = ref(getDatabase());
      get(child(dbRef, "EConductor_Bus_System"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.setState({ bus_info: snapshot.val() });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 10000);
  }
  handleChange(e) {
    e.preventDefault();

    this.setState({ status_for_seat_no: e.target.value });
  }
  state = {
    bus_info: {},
    status_for_seat_no: 1
  };
  render() {
    const {
      Latitude,
      Longitude,
      Bus_Speed,
      Is_seat_four_selected = false,
      Is_seat_one_selected = false,
      Is_seat_three_selected = false,
      Is_seat_two_selected = false
    } = this.state.bus_info;

    const no_of_times_seat_1_selected = this.state.bus_info[
      "No Of  time Seat 1 is selected"
    ];
    const no_of_times_seat_2_selected = this.state.bus_info[
      "No Of  time Seat 2 is selected"
    ];
    const no_of_times_seat_3_selected = this.state.bus_info[
      "No Of  time Seat 3 is selected"
    ];
    const no_of_times_seat_4_selected = this.state.bus_info[
      "No Of  time Seat 4 is selected"
    ];

    let data = [
      { name: "Seat 1", value: no_of_times_seat_1_selected },
      { name: "Seat 2", value: no_of_times_seat_2_selected },
      { name: "Seat 3", value: no_of_times_seat_3_selected },
      { name: "Seat 4", value: no_of_times_seat_4_selected }
    ];
    return (
      <div className="container">
        <h1 className="heading">Admin view Bus</h1>
        <div className="subcontainer">
          {" "}
          Check status of Seat No.
          <select
            value={this.state.status_for_seat_no}
            onChange={(e) => this.handleChange(e)}
          >
            {[1, 2, 3, 4].map((seat, i) => {
              return <option>{seat}</option>;
            })}
          </select>
          <div>
            {this.state.status_for_seat_no == 1
              ? Is_seat_one_selected == "true"
                ? "Selected"
                : "Not Selected"
              : this.state.status_for_seat_no == 2
              ? Is_seat_two_selected == "true"
                ? "Selected"
                : "Not Selected"
              : this.state.status_for_seat_no == 3
              ? Is_seat_three_selected == "true"
                ? "Selected"
                : "Not Selected"
              : Is_seat_four_selected == "true"
              ? "Selected"
              : "Not Selected"}
          </div>
        </div>
        {/* <div>
          <h3>Seats Vacant</h3>
          {seats_vacant.map((st) => (
            <div>Seat No.{st.label}</div>
          ))}
        </div> */}
        <BarGraph graphData={data} />
        <div className="MapContainer">
          {!isNaN(Latitude) && !isNaN(Longitude) && (
            <UserLocation
              google
              latitude={parseFloat(Latitude)}
              longitude={parseFloat(Longitude)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
