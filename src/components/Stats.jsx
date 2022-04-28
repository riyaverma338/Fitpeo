import React from 'react'
import Card from '@mui/material/Card';
import growth from "../assets/growth.png";
import stats from "../assets/stats.png";
import "../css/stats.css";
import CardContent from '@mui/material/CardContent';

export default function Stats() {

    const data= [
        {
            id:1,
            h5: "Total Active Users",
            h6: "+2.6%",
            h1: "18,765",
        },
        {
            id:1,
            h5: "Total Active Users",
            h6: "+2.6%",
            h1: "18,765",
        },
        {
            id:1,
            h5: "Total Active Users",
            h6: "+2.6%",
            h1: "18,765",
        }
    ]
  return (
    <>
    <section className='stats'>
    {data.map((data) => (
    <Card className="stats-main">
      <CardContent className='stats-cards'>
          <div>
          <h5>{data.h5}</h5>
          <div className='stats-growth'>
              <img src={growth} />
              <h6>{data.h6}</h6>
          </div>
          <h1>{data.h1}</h1>
          </div>
          <div>
              <img src={stats} />
          </div>

      </CardContent>
    </Card>
    ))}
    </section>
    </>
  )
}
