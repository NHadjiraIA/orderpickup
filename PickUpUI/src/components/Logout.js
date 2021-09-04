import React from 'react' 
import { useHistory} from "react-router-dom";
import { ROOT } from '../navigation/CONSTANTS';

export default function Logout(props) {
    const history = useHistory();
    const setUserName = props.setUserName;
    setUserName('');
    history.push({
        pathname: ROOT
    });
    console.log('just reset the user name');
    return (
        <div>
            <p> this is just an example of that</p>
        </div>
    )
}
