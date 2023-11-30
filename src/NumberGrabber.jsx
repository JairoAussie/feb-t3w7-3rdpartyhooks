import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function NumberGraber (){

    //const params = useParams();
    const {banana, id, potato} = useParams();
    const navigate = useNavigate();

    function navigateToHome(){
        console.log("The logic that posts a message, submits a form or whatever")
        navigate('/')
    }

    useEffect(()=> {
        setTimeout(() => {
            console.log("Simulating we're doing something, we will now redirect you...");
            navigate('/');
        }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
            <h1>The number that this component grabbed is: {banana}</h1>
            <h1>And the id is: {id}</h1>
            <h1>And potatoes: {potato}</h1>
            <button onClick={navigateToHome}>Go home</button>
        </div>    
    )
}