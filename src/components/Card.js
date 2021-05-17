import classes from './Card.module.css';

const card = (props) =>{
    const className = classes.Card+" "+props.className;
    return <div className={className}>{props.children}</div>;
}
export default card;