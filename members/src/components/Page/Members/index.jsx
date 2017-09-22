// Members
import React from 'react';
import { Link, Route} from 'react-router-dom'
import styles from './style.css'

const Members = ({ match }) => {

  return (
    <div>
      <h2>Member<b>s</b></h2>
      <Link to={`${match.url}/member`}><button className={styles.menuButton}>Member</button></Link>
    </div>
  )
}

export default Members
