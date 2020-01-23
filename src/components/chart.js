import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Jan 10", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
                datasets: [{
                    // label: '',
                    data: []
                  }]
            }
        }
    }
    render() {
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    width={'100%'}  
                    height={456}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

export default Chart;
