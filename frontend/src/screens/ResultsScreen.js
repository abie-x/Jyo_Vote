// src/components/pie.rechart.js

// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import {Container, Grid, useTheme, Input, Button, Textarea} from "@nextui-org/react";
// import {useNavigate} from 'react-router-dom'

// class ResultsScreen extends React.Component {

//     COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
    
     
//     pieData = [
//         {
//             "name": "Anna",
//             "value": 68.85
//         },
//         {
//             "name": "Sonny",
//             "value": 7.91
//         },
//         {
//             "name": "Harry",
//             "value": 6.85
//         },
//         {
//             "name": "Edward",
//             "value": 6.14
//         },
//         {
//             "name": "Others",
//             "value": 10.25
//         }
//     ];

//     CustomTooltip = ({ active, payload, label }) => {
//         if (active) {
//             return (
//                 <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
//                     <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
//                 </div>
//             );
//         }

//         return null;
//     };

//     render() {
//         return (
//             <div className='candidate-background'>
//                 <div className='candidate-background-child' style={{display: "flex", height: "100%",  justifyContent: "center", alignItems: "center"}}>
//                     <PieChart width={730} height={300}>
//                             <Pie data={this.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
//                                 {
//                                     this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
//                                 }
//                             </Pie>
//                         <Tooltip content={<this.CustomTooltip />} />
//                         <Legend />
//                     </PieChart>
//                 </div>
//                 <Button color="success" auto style={{height: "40px", width: "250px", marginTop: "25px", paddingTop: "5px"}} onPress={() => console.log('iam pressed')}>
//                     <h4>View Result</h4>
//                 </Button>
//             </div>
//         )
//     };
// }

// export default ResultsScreen;



import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import {Container, Grid, useTheme, Input, Button, Textarea} from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'

const ResultsScreen = () =>  {

    const  COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
    
     
     const pieData = [
        {
            "name": "Anna",
            "value": 68.85
        },
        {
            "name": "Sonny",
            "value": 7.91
        },
        {
            "name": "Harry",
            "value": 6.85
        },
        {
            "name": "Edward",
            "value": 6.14
        },
        {
            "name": "Others",
            "value": 10.25
        }
    ];

    const navigate = useNavigate()

     const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

        return (
            <div className='candidate-background'>
                <div className='candidate-background-child' style={{display: "flex", height: "100%",  justifyContent: "center", alignItems: "center"}}>
                    <PieChart width={730} height={300}>
                            <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                                {
                                    pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                }
                            </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                    </PieChart>
                    
                </div>
                <Button color="success" auto style={{height: "40px", width: "250px", paddingTop: "5px", position: "absolute", top: "80%", left: "42%"}} onPress={() => navigate('/home')}>
                        <h4>Back to Home</h4>
                </Button>
            </div>
        )
    ;
}

export default ResultsScreen;