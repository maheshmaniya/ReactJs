import react from 'react';
import {useParams , useLocation, useHistory} from 'react-router-dom';



const About = () => {
    const { data, userName} = useParams();
    const Location = useLocation();
    const History = useHistory();
    console.log(History);
    return(
        <div>
        <h1>Hello, This is a about page</h1>
        <h1> Demo of user {data} </h1>
        <h1> name of user is {userName}</h1>
        <h1>MY location is {Location.pathname}</h1>
        {Location.pathname === '/about/47/mack' ? <button onClick={() => History.push('/')}> Click Me</button> : null};
        </div>
    )
}

export default About;