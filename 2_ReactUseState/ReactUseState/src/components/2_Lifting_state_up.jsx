//till now what we know is how to pass data from parent to child(using useState), now we will gona see how we can pass data from child to parent.
function UsestateChild(props){
    return (
        <div>
            <input type="text"/>
            <p>The Entered text is </p>
        </div>
    )
}
export default UsestateChild