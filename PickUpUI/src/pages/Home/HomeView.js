import React from 'react'
import PropTypes from 'prop-types'
import {DISH} from '../../navigation/CONSTANTS'
import {useHistory} from 'react-router-dom'

const HomeView = props => {
    const history = useHistory();
    
    const goToDish = (path) => {
      history.push(path || DISH);
 }
    return (
        <div>     
        <div styles="width: 100%; height: 100%; position: absolute;">
      <div className="valign" styles="width: 100%;">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title green-text center">Something here </span>
                  <div className="row">
                    <span className="black-text">
                      <p>welcome message.
                      </p><br></br>
                     </span>

                  </div>
                  
                </div>
                <div>
                <button type="submit" class="waves-effect waves-light btn green" onClick={()=>goToDish()}>Search Something</button> 
             
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>          
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
