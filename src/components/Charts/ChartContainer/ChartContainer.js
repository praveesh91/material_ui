import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Button,
    ButtonToolbar,
    ButtonGroup,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
import Chart from './Chart.js'

export class LineChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
          dropdownVal: 'one',
          chartType : 'Line'
        }
    }
    async handleLine(){
        await this.setState({ chartType:"Line" });
        this.refs.child.graphType();
    }
    async handleBar(){
        await this.setState({ chartType:"Bar" });
        this.refs.child.graphType();
    }
    async handlePie(){
        await this.setState({chartType:"Pie"});
        this.refs.child.graphType();
    }

    async handleSelect(event){
        await this.setState({dropdownVal: event.target.value})
        this.refs.child.parkingSpaceData();
    }

    render() {
        // console.log("ChartType in Line chart: ",this.state.chartType)
        const chartType = this.state.chartType;
        return (
            <Row>
                <Col>
                    <Card className="rounded">
                    <CardBody>
                        <Row>
                        <Col sm="4">
                            <CardTitle className="mb-0 float-left font-weight-bold">Parking Space Overview</CardTitle>
                            {/* <div className="small text-muted">November 2015</div> */}
                        </Col>
                        <Col sm="4">
                        <FormGroup>
                            <Input type="select" name="select" id="exampleSelect" onChange={(event)=> {this.handleSelect(event)}}>
                                <option value='one'>Parking Sapce A</option>
                                <option value='two'>Parking Sapce B</option>
                                <option value='three'>Parking Sapce C</option>
                                <option value='four'>Parking Sapce D</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col sm="4" className="d-none d-sm-inline-block">
                            <ButtonToolbar aria-label="Toolbar with button groups" className=" float-right">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button className={chartType=='Line' ? 'active' : null} color="outline-secondary" onClick = {()=> {this.handleLine()}}><i className="fa fa-line-chart"></i></Button>
                                    <Button className={chartType=='Bar' ? 'active' : null} color="outline-secondary" onClick = {()=> {this.handleBar()}}><i className="fa fa-bar-chart"></i></Button>
                                    <Button className={chartType=='Pie' ? 'active' : null} color="outline-secondary" onClick = {()=> {this.handlePie()}}><i className="fa fa-pie-chart"></i></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        </Row>
                        <div className="chart-wrapper" style={{ marginTop: 40 + 'px' }}>
                            <Chart ref="child" dropdownVal={this.state.dropdownVal} chartType={this.state.chartType} />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button color="primary rounded-pill px-4">Track the Parking status</Button>
                    </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default LineChart
