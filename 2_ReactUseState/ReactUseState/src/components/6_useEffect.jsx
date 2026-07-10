import { useEffect } from "react";

//Effect is like a side effect of some event. ex: i watch a lot of ph which will leads to damage to my eyes, I study hard which will give me great job, DOM loaded then connect to DB
function UseEffect(props){
    //first(side effect function) - contains what to change when an change happend in parameters mentioned in third place i.e, in [] brackets
    //second(clean-up function) - always excecutes at the end of completion of the event and when the effect is also executed.
    /*third(comma separeted dependancy list) - containes parameters on which the effect we want to add*/
    // useEffect(() => {
    //     //first
    //     return () => {
    //         //second
    //     };
    // }, [/*third*/]);

    //always runs just before render
    //**************************************** */
    //variation 1 :=> runs on every render
    //**************************************** */
    // useEffect(() => {
    //    alert("hello, I runs on each render");
    // });
    //**************************************** */
    //variation 2 :=> runs only once
    //**************************************** */
    // useEffect(() => {
    //     alert("I will run on only first render")
    // }, []);
    //**************************************** */
    //variation 3 :=> runs when there is a change/updation in parameters any property.
    //**************************************** */
    // useEffect(()=>{
    //     alert("Runs when parameters any property get changed");
    // },[props.count]);
    //**************************************** */
    //variation 4 :=> multiple dependancies - runs even one dependancy changes
    //**************************************** */
    // useEffect(()=>{
    //     alert("Multiple dependancy useEffect");
    // },[props.count/*, props.count2,... */])
    //**************************************** */
    //variation 5 :=> with cleanup function;
    useEffect(()=>{
        alert("Count is changed");
        return ()=>{
            alert("count is unmounted");//it is triggered when new effect is created/triggered and it removes the old mounted effect
        }
    },[props.count])
    //**************************************** */

}
export default UseEffect;