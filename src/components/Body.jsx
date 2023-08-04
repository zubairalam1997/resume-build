import React, { useState ,useRef } from 'react';
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Education from './Education';
import MyResume from './MyResume';

const Body = () => {

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Project",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };

    
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });

      const resumeRef = useRef();


  return (
    <div >

        <Education sections={sections} resumeInfo={resumeInformation} setInformation={setResumeInformation} />
        <MyResume sections={sections} resumeInfo={resumeInformation}  ref={resumeRef} />
        <ReactToPrint
          trigger={() => {
            return (
              <button  className=" mb-8 mt-3 py-3 px-4 w-fit rounded-md bg-blue-500 text-white outline-none font-medium text-base  items-center gap-2 cursor-pointer group-active:translate-y-2 transition-transform duration-200"
              >
                Download <ArrowDown className='inline-flex' />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      
    </div>
  )
}

export default Body
