import ChartBar from './ChartBar';
import classes from './Chart.module.css';
const Chart =(props)=>{
    const totalMaximum = Math.max(...props.dataPoints.map(x=>x.value));
    console.log(props.dataPoints);
    return(
        <div className={classes.Chart}>
           {props.dataPoints.map(dataPoint=>
           <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>
               )}
        </div>

    );
}
export default Chart;