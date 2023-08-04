import React, { useEffect } from "react";
import TextFields from "./TextFields";
import { useState } from "react";
import { X } from "react-feather";


const Education = ({ sections, resumeInfo ,setInformation }) => {
  // const sections = props.sections;

  // const resumeInfo = props.resumeInfo;

  const [activeSections, setActiveSections] = useState(
    Object.keys(sections)[0]
  );
  const [sectionTitle, setSectionTitle] = useState(Object.keys(sections)[0]);

  const [activeInformation, setActiveInformation] = useState(
    resumeInfo[sections[Object.keys(sections)[0]]]
  );

  const [activeDetailIndex ,setActiveDetailIndex] = useState(0);

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    certificateLink:activeInformation?.detail?.certificateLink || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
   
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const handleSubmition = () => {
   
    switch (sections[activeSections]) {
        case sections.basicInfo: {
          const tempDetail = {
            name: values.name,
            title: values.title,
            linkedin: values.linkedin,
            github: values.github,
            email: values.email,
            phone: values.phone,
          };
  
          setInformation((prev) => ({
            ...prev,
            [sections.basicInfo]: {
              ...prev[sections.basicInfo],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.workExp: {
          const tempDetail = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            companyName: values.companyName,
            location: values.location,
            points: values.points,
          };
          const tempDetails = [...resumeInfo[sections.workExp]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          setInformation((prev) => ({
            ...prev,
            [sections.workExp]: {
              ...prev[sections.workExp],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.project: {
          const tempDetail = {
            link: values.link,
            title: values.title,
            overview: values.overview,
            github: values.github,
            points: values.points,
          };
          const tempDetails = [...resumeInfo[sections.project]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
         setInformation((prev) => ({
            ...prev,
            [sections.project]: {
              ...prev[sections.project],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.education: {
          const tempDetail = {
            title: values.title,
            college: values.college,
            startDate: values.startDate,
            endDate: values.endDate,
          };
          const tempDetails = [...resumeInfo[sections.education]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          setInformation((prev) => ({
            ...prev,
            [sections.education]: {
              ...prev[sections.education],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.achievement: {
          const tempPoints = values.points;
  
          setInformation((prev) => ({
            ...prev,
            [sections.achievement]: {
              ...prev[sections.achievement],
              points: tempPoints,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.summary: {
          const tempDetail = values.summary;
  
         setInformation((prev) => ({
            ...prev,
            [sections.summary]: {
              ...prev[sections.summary],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.other: {
          const tempDetail = values.other;
  
          setInformation((prev) => ({
            ...prev,
            [sections.other]: {
              ...prev[sections.other],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        default: {
            
            break;
          }
      }
    

    console.log(values);
  };

  const workExpBody = (
    <div className="flex flex-col gap-16">
      <div className="flex gap-20 ">
        <TextFields
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <TextFields
          label="Company name"
          placeholder="Enter Company name eg. amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className="flex  gap-20 ">
        <TextFields
          label="Certificate Link"
          placeholder="Enter certificate Link"
          value={values.certificateLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <TextFields
          label="Location"
          placeholder="Enter Location eg. Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className="flex  gap-20 ">
        <TextFields
          label="Start date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <TextFields
          label="End date"
          type="date"
          placeholder="Enter End date of work"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className="flex flex-col gap-10">
        <label htmlFor="workDes">Enter work description</label>
        <TextFields
          placeholder="Line1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <TextFields
          placeholder="Line2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <TextFields
          placeholder="Line3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className="flex flex-col gap-16">
      <div className="flex gap-20">
        <TextFields
          label="Title"
          placeholder="Enter title, e.g., Project Name"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <TextFields
        label="Overview"
        placeholder="Enter project overview"
        value={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />

      <div className="flex gap-20">
        <TextFields
          label="Deployed Link"
          placeholder="Enter deployed link"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <TextFields
          label="Github Link"
          placeholder="Enter GitHub link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className="flex flex-col gap-10">
        <label htmlFor="projDes">Enter proj description</label>
        <TextFields
          placeholder="Line1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <TextFields
          placeholder="Line2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <TextFields
          placeholder="Line3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />

        <TextFields
          placeholder="Line4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className="flex flex-col gap-16">
      <div className="flex gap-20">
        <TextFields
          label="Title"
          placeholder="Enter title, e.g., B-tech."
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <TextFields
        label="college/school Name"
        placeholder="Enter college/School name"
        value={values.college}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />

      <div className="flex gap-20">
        <TextFields
          label="Start date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <TextFields
          label="End date"
          type="date"
          placeholder="Enter End date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className="flex flex-col gap-16">
      <div className="flex  gap-20">
        <TextFields
          label="Name"
          placeholder="Enter your name"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <TextFields
          label="Job Title"
          placeholder="Enter your job title"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className="flex gap-20">
        <TextFields
          label="LinkedIn"
          placeholder="Enter your LinkedIn profile URL"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <TextFields
          label="GitHub"
          placeholder="Enter your GitHub profile URL"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className="flex gap-20">
        <TextFields
          label="Email"
          placeholder="Enter your email address"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <TextFields
          label="Phone Number"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementBody = (
    <div className="flex flex-col gap-16">
      <label htmlFor="acievements">Enter your achievemments</label>
      <TextFields
        placeholder="Achievement1"
        value={values.points ? values.points[0] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 0)}
      />
      <TextFields
        placeholder="Achievement2"
        value={values.points ? values.points[1] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 1)}
      />
      <TextFields
        placeholder="Achievement3"
        value={values.points ? values.points[2] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 2)}
      />
      <TextFields
        placeholder="Achievement4"
        value={values.points ? values.points[3] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 3)}
      />
    </div>
  );

  const otherBody = (
    <div className="flex flex-col gap-16">
      <TextFields
        label="other"
        placeholder="Enter here something"
        value={values.other}
        onChange={(e) => setValues((prev) => ({...prev, other:e.target.value}))}
      />
    </div>
  );
  const summaryBody = (
    <div className="flex flex-col gap-16">
      <TextFields
        label="summary"
        placeholder="Enter your summaru/objective"
        value={values.summary}
        onChange={(e)=> setValues((prev)=> ({...prev, summary:e.target.value}))}
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSections]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    const activeInfo = resumeInfo[sections[activeSections]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSections]);
    setActiveDetailIndex(0);
    setValues({
        name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",

    });
  }, [activeSections,resumeInfo ,sections]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = resumeInfo[sections[activeSections]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    
 
      
    });
  }, [activeDetailIndex]);

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    setInformation((prev) => ({
      ...prev,
      [sections[activeSections]]: {
        ...resumeInfo[sections[activeSections]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    setInformation((prev) => ({
      ...prev,
      [sections[activeSections]]: {
        ...resumeInfo[sections[activeSections]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  return (
    <div className="min-w-[550px] min-h-[450px] max-w-[850px] flex flex-col gap-5 shadow-md px-4 pb-10 pt-5 mx-auto">
      <div className="flex gap-4 overflow-x-auto border-b-2 border-gray-200">
        {Object.keys(sections)?.map((key) => (
          <div
            // className="p-4 border-b font-medium text-base whitespace-nowrap cursor-pointer"
            className={`${"p-4 border-b font-medium text-base whitespace-nowrap cursor-pointer"} ${
              activeSections === key
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
            key={key}
            onClick={() => setActiveSections(key)}
          >
            {" "}
            {sections[key]}{" "}
          </div>
        ))}
      </div>

      <div className="p-30 flex flex-col text-left gap-20 pt-0">
        <TextFields
          label="Title"
          placeholder="Enter Section Title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />

        <div className="flex flex-wrap items-center gap-20">
        {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                className={`flex gap-5 items-center px-2 py-1 bg-gray-500 rounded-full cursor-default ${
                    activeDetailIndex === index ? "bg-blue-500 text-white" : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
               >
                  <p>
                    {sections[activeSections]} {index + 1}
                  </p>
                  <X
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteDetail(index);
                    }}
                  />
                </div>
              ))
            : ""}
             {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className="text-blue-500  tracking-wide cursor-pointer" onClick={handleAddNew}>
              +Add
            </div>
          ) : (
            ""
          )}
        </div>

        {generateBody()}
        <button
          className="py-2 px-4 w-fit rounded-md bg-blue-500 text-white outline-none font-medium text-base flex  items-center gap-2 cursor-pointer group-active:translate-y-2 transition-transform duration-200"
          onClick={handleSubmition}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Education;
