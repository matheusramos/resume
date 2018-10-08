import React, { Component } from 'react';

import Bar from './components/Bar';
import Experience from './components/Experience';
import Education from './components/Education';
import Main from './components/Main';
import Name from './components/Name';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import SidebarSection from './components/SidebarSection';

import styles from './App.css';
import info from './data.json';

class App extends Component {
  render() {
    const { experience, education } = info;
    return (
      <div className={styles.app}>
        <Sidebar>
          <Name
            name={info.name.first}
            surname={info.name.last}
            position={info.position}
          />
          <SidebarSection title="Profile">
            <div>{info.about}</div>
          </SidebarSection>
          <SidebarSection title="Contact">
            <div>{info.contact.phone}</div>
            <div>{info.contact.website}</div>
            <div>{info.contact.email}</div>
          </SidebarSection>
          <SidebarSection title="Skills">
            {info.skills
              .sort((a, b) => b.level - a.level)
              .slice(0, 3)
              .map(skill => (
                <Bar key={skill.name} name={skill.name} level={skill.level} />
              ))}
          </SidebarSection>
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
