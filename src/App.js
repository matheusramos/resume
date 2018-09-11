import React, { Component } from 'react';

import Main from './components/Main';
import Section from './components/Section';
import Experience from './components/Experience';
import Education from './components/Education';
import Sidebar from './components/Sidebar';

import styles from './App.css';
import info from './data.json';

class App extends Component {
  render() {
    const { experience, education } = info;
    return (
      <div className={styles.app}>
        <Sidebar>
          <h1>{info.name.first}</h1>
          <h1>{info.name.last}</h1>
        </Sidebar>
        <Main>
          <Section title="Work experience">
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
          </Section>
          <Section title="Education">
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
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
