import React, { Component, Fragment } from 'react';

import MainSection from './components/MainSection';
import Experience from './components/Experience';
import Education from './components/Education';

import info from './data.json';

class App extends Component {
  render() {
    const { experience, education } = info;
    return (
      <Fragment>
        <h1>{`${info.name.first} ${info.name.last}`}</h1>
        <MainSection title="Work experience">
          {experience.map(xp => (
            <Experience
              key={`${xp.title}-${xp.company}`}
              company={xp.company}
              position={xp.position}
              startDate={xp.start && new Date(xp.start)}
              endDate={xp.end && new Date(xp.end)}
              description={xp.description}
            />
          ))}
        </MainSection>
        <MainSection title="Education">
          {education.map(ed => (
            <Education
              key={`${ed.degree}-${ed.institute}`}
              institute={ed.institute}
              degree={ed.degree}
              startDate={ed.start && new Date(ed.start)}
              endDate={ed.end && new Date(ed.end)}
              description={ed.description}
            />
          ))}
        </MainSection>
      </Fragment>
    );
  }
}

export default App;