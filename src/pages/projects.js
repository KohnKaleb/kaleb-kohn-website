import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <div className="row">
        <div className="col-md-6">
          <p>
            Computer Science Major at UW-Madison
            Passionate about computer science and mostly interested in backend development, but I like to try and learn all aspects of software development.
            I am also a member of the Air Force National Guard and have been in for over 4 years now, and have gone on one deployment to Saudi Arabia.
          </p>
        </div>
      </div>
    </div>
  );
}

export const Head = () => <title>Kaleb's Website</title>

export default AboutPage;