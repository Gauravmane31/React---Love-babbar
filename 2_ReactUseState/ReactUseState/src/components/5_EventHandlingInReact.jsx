function EventCompo() {
    function changeBgColor(e) {
        let btn = document.getElementById("btn1");

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    function getAlart(e){
        e.stopPropagation();//if u dont stop propagation of event then it will call the event handler of its parent to parent to parent.... bcz by default it propagates to its parent elements
        alert("do not hover on Hover me");
    }
    function showContent(e){
        let p1=document.getElementById('P1');
        p1.textContent=`Entered Content :${e.target.value}`;
    }
    function handleDivOver(e){
        alert("You hovered on div!!");
    }
    return (
        // NOTE : All events propagate in React except onScroll, which only works on the JSX tag you attach it to.
        <div onMouseOver={handleDivOver}>
            {/* Example of handling event using onClick*/}
            <button onClick={changeBgColor} id="btn1" className="border-2">
                Click me to change bgcolor
            </button>
            {/* Example of Mouse over event */}
            <h1 onMouseOver={getAlart} className="text-2xl border-2 w-40">Hover Me to get alert</h1>
            {/* By passing Event in function u can access the content and different info about that event. */}
            <input type="text" onChange={showContent}/>
            <p id="P1"></p>
        </div>
    );
}

export default EventCompo;