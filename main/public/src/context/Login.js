import Login from "./LoginContext";

const Loginstate=(props)=>{
    const state={
        "name":"hiii"
    }
    return(
        <Login.Provider value={state}>
            {props.childern}
        </Login.Provider>
    )
}
export default Loginstate
