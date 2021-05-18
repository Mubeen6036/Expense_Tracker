import classes from './ChartBar.module.css';
const ChartBar = (props) =>{
    let barFillHeight = '0%';
    if(props.maxValue>0){
        barFillHeight = Math.round((props.value/props.maxValue)*100)+'%';
    }
    return(
    <div className={classes.ChartBar}>
        <div className={classes.ChartBar__inner}>
            <div className={classes.ChartBar__fill} style={{backgroundColor:'red',height:barFillHeight}}>
            </div>
        </div>
        <div className={classes.ChartBar__label}>
            {props.label}
        </div>
    </div>
    );
}
export default ChartBar;