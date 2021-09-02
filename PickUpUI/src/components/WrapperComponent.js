import { RouterConfig } from '../navigation/RouterConfig';
import {Navigation} from "./Navigation"
import Footer from './Footer';

export default function WrapperComponent(props){
        return (
            <div>
                <Navigation/>
                <RouterConfig/>
                <Footer />
            </div>
        )
}