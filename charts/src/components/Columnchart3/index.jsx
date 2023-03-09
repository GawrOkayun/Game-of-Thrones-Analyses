import ApexChart from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Columnchart3(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/melhoresseasons')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })

  const series = [{
    name: 'Teste',
    data: post?.map((e) => {
      return e.media
    })
  }]

  const options = {
    chart: {
      height: 'auto'
    },
    xaxis: {
      position: "bottom",
      labels: {
        show: true,
        rotate: -45
      },
      categories: post?.map((e) => {
        return e.season
      }),
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Nota da temporada(média)',
      },
      tooltip: {
        enabled: true
      }
    }
  }

  return(
      <ApexChart options={options} series={series} type="bar"/>
    
  )
}

export default Columnchart3;