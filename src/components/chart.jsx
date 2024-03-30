/* eslint-disable no-unused-vars */
import React from 'react'
import { BarChart, Bar, Tooltip, Legend } from 'recharts';

const data = [
    { name: '01', value: 65, fill:'#bae6fd' },
    { name: '02', value: 59, fill:'#bae6fd' },
    { name: '03', value: 80, fill:'#bae6fd' },
    { name: '04', value: 81, fill:'#bae6fd' },
    { name: '04', value: 56, fill:'#bae6fd' },
    { name: '06', value: 55, fill:'#bae6fd' },
    { name: '07', value: 40, fill:'#bae6fd' },
    { name: '08', value: 65, fill:'#bae6fd' },
    { name: '09', value: 59, fill:'#bae6fd' },
    { name: '10', value: 80, fill:'#bae6fd' },
    { name: '11', value: 81, fill:'#bae6fd' },
    { name: '12', value: 56, fill:'#bae6fd' },
    { name: '13', value: 55, fill:'#bae6fd' },
    { name: '14', value: 40, fill:'#bae6fd' },
    { name: '15', value: 65, fill:'#bae6fd' },
    { name: '16', value: 59, fill:'#bae6fd' },
    { name: '17', value: 80, fill:'#bae6fd' },
    { name: '18', value: 81, fill:'#bae6fd' },
    { name: '19', value: 56, fill:'#bae6fd' },
    { name: '20', value: 55, fill:'#bae6fd' },
    { name: '21', value: 40, fill:'#bae6fd' },
    { name: '22', value: 95, fill:'#157AFF' },
    { name: '23', value: 59, fill:'#bae6fd' },
  ];

export default function Chart() {
  return (
    
    <BarChart width={510} height={60} data={data}>
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Bar key={`bar-${index}`} fill={entry.fill} />
          ))}
        </Bar>
    </BarChart>
       
  )
}
