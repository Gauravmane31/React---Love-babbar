//methods to implement conditional rendering:
// 1.ternary operator
// 2.if-else
// 3.logical operator
// 4.early return
function Conditional(props) {
    const isActive = props.activeSection === props.id;

    return (
        <div>
            <h1>{props.DefaultContent}</h1>

            {isActive ? (
                <>
                    {props.children}
                </>
            ) : (
                <button onClick={() => props.setActiveSection(props.id)} className="border-2">
                    Show Content
                </button>
            )}
        </div>
    );
}

export default Conditional;