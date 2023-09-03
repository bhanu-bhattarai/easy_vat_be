import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <div>
      <header className="header">
        <nav >
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/add/sells">Add Sell</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/create/client">Create Client</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/reports">Generate Report</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/clients">List Clients</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/sells">List Sells</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className="title">Welcome to the Home Page</h1>
        <p className="subtitle">Please select an option from the navigation above.</p>
      </main>
    </div>
  );
}

export default Home;
