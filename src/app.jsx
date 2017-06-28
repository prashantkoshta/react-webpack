import React from 'react';
import ReactDOM from 'react-dom';


//import { Hello } from "./component/hello";

//require("./../style/css/app.scss");
//import s from "./assets/css/main.css";
//import t from "./assets/css/app.scss";

/*const Helloa = (props) => {
    return (
        <div>Test me here</div>
    );
};*/
//<Helloa compiler="TypeScript" framework="React"></Helloa>
/*
class Helloa extends React.Component{
    render(){
        return (
            <div>
                I am good here.
            </div>
        );
    }
}

*/

class App extends React.Component{
    render(){
        return (<div>I am good here prashant</div>);
    };
}

ReactDOM.render(<App />, document.getElementById('root'));