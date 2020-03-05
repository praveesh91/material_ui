import React from 'react';
import axios from 'axios';
import { Line, Bar, Area, Chart } from 'react-chartjs-2';

class ChartContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      axiosData: {},
      showLine: true,
      showBar: false,
      showPie: false,
    }
  }

  componentDidMount() {
     axios('https://praveesh91.github.io/test_json/parkingData.json')
      .then((response) => {
        const { parkingData } = response.data;
        // const values = parkingData.map(d => d.vehicles.booked)
        // const valus = parkingData.map(d => d.day)
        const chartData = {
            labels: parkingData.map(k => k.day),
            datasets: [
                {
                label: 'Booked',
                fill: 'false',
                data: parkingData.map(d => d.vehicles.booked),
                backgroundColor: 'red',
                borderColor: 'red',
                },
                {
                  label: 'Vacant',
                  fill: 'false',
                  data: parkingData.map(d => d.vehicles.vacant),
                  backgroundColor: 'blue',
                  borderColor: 'blue',
                },
                {
                  label: 'Occupied',
                  fill: 'false',
                  data: parkingData.map(d => d.vehicles.occupied),
                  backgroundColor: 'green',
                  borderColor: 'green',
                }
            ]
        }
        this.setState({ chartData });
      });

  }
  

  // componentDidMount() {
  //    axios('https://praveesh91.github.io/test_json/parkingGraphData.json')
  //     .then((response) => {
  //       const parkingData  = response.data.ParkingData;
  //       const values = parkingData.map(d => d.parkingSpaceA)
  //       console.log("values",parkingData);
  //       //this.setState({axiosData:parkingData });

  //     })
  // }

  // parkingSpaceData = () =>{
  //   const parkingSpace = this.props.dropdownVal;
  //   console.log('parkingSpace is ',parkingSpace)
  //   if(parkingSpace == 'two'){
  //         const chartData = {
  //         labels: this.state.axiosData.map(k => k.parkingSpaceA),
  //         datasets: [
  //             {
  //             label: 'Booked',
  //             fill: 'false',
  //             data: this.state.axiosData.map(d => d.parkingSpaceA.occupied),
  //             backgroundColor: 'red',
  //             borderColor: 'red',
  //             }
  //         ]
  //     }
  //     this.setState({ chartData });
  //     console.log("axiosData= ",this.state.axiosData.parkingSpaceA)
  //     console.log("ChartData",chartData)
  //   }
  // }

graphType = ()=>{

  const Chart_type = this.props.chartType;
  console.log("Chart_type in ChartContainer is ",Chart_type);
  if (Chart_type==='Line'){
    this.setState({
      showLine: true,
      showBar: false,
      showPie: false,
    })
  }
  else if(Chart_type==='Bar'){
      this.setState({
        showLine: false,
        showBar: true,
        showPie: false,
      })
  }
  else if(Chart_type==="Pie"){
      this.setState({
        showLine: false,
        showBar: false,
        showPie: true,
      })
  }

}

render() {


  const {showLine, showBar, showPie} = this.state;
  // console.log(this.state.showBar)
 
  // console.log(this.state)
  return (
  <div>
      {showLine && <Line data={this.state.chartData}/>}
      {showBar && <Bar data={this.state.chartData}/>}
      {showPie && <Line data={this.state.chartData}/>}
  </div>
  );
}
}
export default ChartContainer;
