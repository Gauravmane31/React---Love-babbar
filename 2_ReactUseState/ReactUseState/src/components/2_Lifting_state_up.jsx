//till now what we know is how to pass data from parent to child(using useState), now we will gona see how we can pass data from child to parent.
//now the questions comes is why we needed to transfer data from chlid to parent. to understand this lets take an example that if two child access the parent data and one of them change it then it should reflect in other child and thats why we need to transfer data from chlid to parent to modify existing value by the updated value by that child.
function UsestateChild(props) {
  return (
    <div className="w-2xs flex flex-col justify-center align-middle">
        <input
          type="text"
          onChange={(e) => {
            props.function(e.target.value);
          }}
          className="border-2"
        />
        <p>The Entered text is {props.name}</p>
    </div>
  );
}
export default UsestateChild;
