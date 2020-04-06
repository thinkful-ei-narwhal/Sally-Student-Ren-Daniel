import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <body>
        <header>
          <h1>Sally Student's Resume</h1>
        </header>
        <main>
          <section>
            <h2>Education</h2>
            <ul>
              <li> Unicorn University - Master's Degree in Origami</li>
            </ul>
          </section>
          <section>
            <h3>Employment History</h3>
            <p>
              Hallmark - Card Designer (Dec 1st,1990 to Present): Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              US Postal Service - Postmaster (Dec 1st, 1854 to Jan 1st, 1855):
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <h4 class="rawr">Contact Info</h4>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
            alt="An image of Sally Student"
          />
          <p>Sally Student</p>

          <footer>
            <address>
              <ul>
                <li>
                  <a href="mailto:imnotreal@fake.com">imnotreal@fake.com</a>
                </li>
                <li>
                  <a href="+55555555555">(555)555-5555</a>
                </li>
              </ul>
            </address>
          </footer>
        </main>
      </body>
    </div>
  );
}

export default App;
