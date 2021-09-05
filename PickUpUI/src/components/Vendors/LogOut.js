import React from 'react' 
import { useHistory} from "react-router-dom";
import { ROOT } from '../../navigation/CONSTANTS';

export default function Logout(props) {
    const history = useHistory();
    history.push({
        pathname: ROOT
    });
    return (
        <>
             
        </>
    )
}
