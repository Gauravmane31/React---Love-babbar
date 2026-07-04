function childprops(props){
    return (
        <div>
            <p>{props.countnew}</p>
            <button onClick={props.incrementer}>
                {props.text}
            </button>
            {/* {props.children} */}
        </div>
    )
}
export default childprops