function PropsEx(props) {
  return (
    <>
      <div className="flex flex-col justify-center align-middle text-center w-50 border-4 p-1.5 m-1.5" style={props.style}>
        <h2>{props.name}</h2>
        <img src={props.img} alt="img not found" className="w-16 self-center" />
        <p>
          Hi, I am Gaurav Mane, a second year Computer Science and Engineering
          student at WCE.
        </p>
      </div>
    </>
  );
}
export default PropsEx