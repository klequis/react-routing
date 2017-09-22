// Page
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from './style.css'
import Members from './Members'
import Member from './Members/Member'
const Page = () => {

  return (
    <Router>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Page</h1>
          <div className={styles.menu}>

            <Link to='/'><button className={styles.menuButton}>Home</button></Link>
            <Link to='/members'><button className={styles.menuButton}>Members</button></Link>
          </div>
        </div>
        <Route exact path='/' />
        <Route exact path='/members' component={Members} />
        <Route path='/members/member' component={Member} />
      </div>
    </Router>
  )
}

export default Page
