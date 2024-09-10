// App.js
import React from "react";
import '../Styles/student.css';

function Student() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Report</div>
        </nav>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <div className="profile-pic"></div>
          <div className="profile-details">
            <div>Profile Name</div>
            <div>Other details</div>
            <div>More details</div>
          </div>
        </aside>
        <section className="content">
          <div className="section achievements">
            <h2>Achievements:</h2>
            <table>
              <thead>
                <tr>
                  <th>Achievement</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Achievement 1</td>
                  <td>Details 1</td>
                  <td><button>Submit</button></td>
                </tr>
                <tr>
                  <td>Achievement 2</td>
                  <td>Details 2</td>
                  <td><button>Submit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section events">
            <h2>Events:</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Event 1</td>
                  <td>Details 1</td>
                  <td><button>Submit</button></td>
                </tr>
                <tr>
                  <td>Event 2</td>
                  <td>Details 2</td>
                  <td><button>Submit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <aside className="announcements">
          <h2>Announcements:</h2>
          <ul>
            <li>Announcement 1</li>
            <li>Announcement 2</li>
            <li>Announcement 3</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Student;
