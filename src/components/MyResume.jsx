import React, { forwardRef, useEffect, useState } from 'react';
import {
    AtSign,
    Calendar,
    GitHub,
    Linkedin,
    MapPin,
    Paperclip,
    Phone,
  } from "react-feather";

const MyResume = forwardRef(({resumeInfo , sections},ref) => {

    const [columns , setColumns ] = useState([[],[]]);
    const [target , setTarget] =useState("");
    const [source , setSource] = useState("");

    const info = {
        workExp:resumeInfo[sections.workExp],
        project:resumeInfo[sections.project],
        achievement:resumeInfo[sections.achievement],
        education:resumeInfo[sections.education],
        basicInfo:resumeInfo[sections.basicInfo],
        summary:resumeInfo[sections.summary],
        other:resumeInfo[sections.other],

    }

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    };

    const sectionDiv = {
        [sections.workExp]: (
          <div
            key={"workexp"}
            draggable
            onDragOver={() => setTarget(info.workExp?.id)}
            onDragEnd={() => setSource(info.workExp?.id)}

            className={`section border-b-2 border-black ${
              info.workExp?.sectionTitle ? "" : "hidden"
            }`}
          >
            <div className="sectionTitle flex text-xl font-bold w-full">
              {info.workExp.sectionTitle}
            </div>
            <div className="content flex flex-col gap-4 py-2">
              {info.workExp?.details?.map((item) => (
                <div className="item  pb-10" key={item.title}>
                  {item.title ? (
                    <p className="title flex font-medium text-base">{item.title}</p>
                  ) : (
                    <span />
                  )}
                  {item.companyName ? (
                    <p className="subTitle flex font-bold text-blue-500 text-base">
                      {item.companyName}
                    </p>
                  ) : (
                    <span />
                  )}
                  {item.certificationLink ? (
                    <a
                      className="link flex gap-5 text-sm"
                      href={item.certificationLink}
                    >
                      <Paperclip  size={18}/>
                      {item.certificationLink}
                    </a>
                  ) : (
                    <span />
                  )}
                  {item.startDate && item.endDate ? (
                    <div className="date flex gap-5 text-sm">
                      <Calendar /> {getFormattedDate(item.startDate)}-
                      {getFormattedDate(item.endDate)}
                    </div>
                  ) : (
                    <div />
                  )}
                  {item.location ? (
                    <p className="flex gap-5 date text-sm">
                      <MapPin  size={18}/> Remote
                    </p>
                  ) : (
                    <span />
                  )}
                  {item.points?.length > 0 ? (
                    <ul className="points pl-18 text-sm">
                      {item.points?.map((elem, index) => (
                        <li className="point" key={elem + index}>
                          {elem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span />
                  )}
                </div>
              ))}
            </div>
          </div>
        ),
        [sections.project]: (
          <div
            key={"project"}
            draggable
            onDragOver={() => setTarget(info.project?.id)}
            onDragEnd={() => setSource(info.project?.id)}
           
            className={`section border-b-2 border-black ${
              info.project?.sectionTitle ? "" : "hidden"
            }`}
          >
            <div className="sectionTitle flex text-xl font-bold w-full">
              {info.project.sectionTitle}
            </div>
            <div className="content flex flex-col text-left  gap-4 py-2">
              {info.project?.details?.map((item) => (
                <div className="item" key={item.title}>
                  {item.title ? (
                    <p className="title font-medium text-base">{item.title}</p>
                  ) : (
                    <span />
                  )}
                  {item.link ? (
                    <a className="link flex gap-5 text-sm" href={item.link}>
                      <Paperclip  size={18}/>
                      {item.link}
                    </a>
                  ) : (
                    <span />
                  )}
                  {item.github ? (
                    <a className="link flex pt-1 gap-5 text-sm " href={item.github}>
                      <GitHub size={18} />
                      {item.github}
                    </a>
                  ) : (
                    <span />
                  )}
                  {item.overview ? (
                    <p className="overview flex  text-sm">{item.overview} </p>
                  ) : (
                    <span />
                  )}
                  {item.points?.length > 0 ? (
                    <ul className="points  text-sm">
                      {item.points?.map((elem, index) => (
                        <li className="point flex " key={elem + index}>
                          {elem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span />
                  )}
                </div>
              ))}
            </div>
          </div>
        ),
        [sections.education]: (
          <div
            key={"education"}
            draggable
            onDragOver={() => setTarget(info.education?.id)}
            onDragEnd={() => setSource(info.education?.id)}
          
            className={`section border-b-2 border-black ${
              info.education?.sectionTitle ? "" : "hidden"
            }`}
          >
            <div className="sectionTitle flex text-xl font-bold w-full">
              {info.education?.sectionTitle}
            </div>
            <div className="content flex flex-col gap-4 py-2">
              {info.education?.details?.map((item) => (
                <div className="item" key={item.title}>
                  {item.title ? (
                    <p className="title flex font-medium text-base">{item.title}</p>
                  ) : (
                    <span />
                  )}
                  {item.college ? (
                    <p className="subTitle flex font-bold text-blue-500 text-base">
                      {item.college}
                    </p>
                  ) : (
                    <span />
                  )}
                  {item.startDate && item.endDate ? (
                    <div className="date flex gap-5 text-sm">
                      <Calendar /> {getFormattedDate(item.startDate)} -
                      {getFormattedDate(item.endDate)}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ),
        [sections.achievement]: (
          <div
            key={"achievement"}
            draggable
            onDragOver={() => setTarget(info.achievement?.id)}
            onDragEnd={() => setSource(info.achievement?.id)}
          
            className={`section border-b-2 border-black ${
              info.achievement?.sectionTitle ? "" : "hidden"
            }`}
          >
            <div className="sectionTitle flex text-xl font-bold w-full">
              {info.achievement?.sectionTitle}
            </div>
            <div className="content flex flex-col gap-4 py-2">
              {info.achievement?.points?.length > 0 ? (
                <ul className="numbered pl-18 text-sm">
                  {info.achievement?.points?.map((elem, index) => (
                    <li className="point flex" key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          </div>
        ),
        [sections.summary]: (
          <div
            key={"summary"}
            draggable
            onDragOver={() => setTarget(info.summary?.id)}
            onDragEnd={() => setSource(info.summary?.id)}
         
            className={`section border-b-2 border-black ${
              info.summary?.sectionTitle ? "" : "hidden"
            }`}
          >
            <div className="sectionTitle flex p-1 text-xl font-bold w-full">
              {info.summary?.sectionTitle}
            </div>
            <div className="content flex justify-start flex-col gap-4 py-2">
              <p className="overview text-left  text-sm">{info.summary?.detail}</p>
            </div>
          </div>
        ),
        [sections.other]: (
          <div
            key={"other"}
            draggable
            onDragOver={() => setTarget(info.other?.id)}
            onDragEnd={() => setSource(info.other?.id)}
           
            className={`section border-b-2 border-black ${
              info.other?.sectionTitle ? "" : "hidden"
            }`}
          >
            <div className="sectionTitle  flex text-xl font-bold w-full">
              {info.other?.sectionTitle}
            </div>
            <div className="content flex flex-col gap-4 py-2">
              <p className="overview  text-left text-sm">{info?.other?.detail}</p>
            </div>
          </div>
        ),
      };

      const swapSourceTarget = (source, target) => {
        if (!source || !target) return;
        const tempColumns = [[...columns[0]], [...columns[1]]];
    
        let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
          sourceColumnIndex = 1;
          sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
        }
    
        let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
          targetColumnIndex = 1;
          targetRowIndex = tempColumns[1].findIndex((item) => item === target);
        }
    
        const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex] =
          tempColumns[targetColumnIndex][targetRowIndex];
    
        tempColumns[targetColumnIndex][targetRowIndex] = tempSource;
    
        setColumns(tempColumns);
      };

    useEffect(() => {
        setColumns([[sections.project ,sections.education ,sections.summary],
            [sections.workExp, sections.achievement, sections.other]]);
    },[]);

    useEffect(() => {
      swapSourceTarget(source, target);
    }, [source, target]);

  return (
    <div ref={ref} className='m-1'>
        <div key={'workExp'} className='container min-w-[700px] max-w-[850px] mx-auto pb-0 px-4  h-auto min-h-[900px] shadow-md flex flex-col gap-8 ' >
        <div className='header flex flex-col '>
            <p className='heading text-2xl text-left font-medium capitalize'>
            {info.basicInfo?.detail?.name}
            </p>
            <p className='subHeading text-left text-blue-500 font-medium text-lg'>
            {info.basicInfo?.detail?.title}
            </p>
            <div className='mt-4 flex  gap-8 flex-wrap  gap-y-4'>
            {info.basicInfo?.detail?.email ? (
                <a className="text-xs flex items-center gap-1 cursor-pointer text-blue-500" type='email' href={info.email}> <AtSign size={16} /> {info.basicInfo?.detail?.email}</a>
            ) : (
                <span />
              ) }
               {info.basicInfo?.detail?.phone ? (
              <a className="text-xs flex items-center gap-1 cursor-pointer text-blue-500" href={info.phone}>
                <Phone size={16} /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className="text-xs flex items-center gap-1 cursor-pointer text-blue-500"href={info.basicInfo?.detail?.linkedin} >
                <Linkedin size={16} /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className="text-xs flex items-center gap-1 cursor-pointer text-blue-500" href= {info.basicInfo?.detail?.github} >
                <GitHub size={16} /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
            </div>
        </div>

        <div className='flex gap-6 pb-0 '>
          <div className='flex flex-1 flex-shrink-1 flex-basis-0 flex-col gap-20'>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className='flex flex-1 flex-shrink-1 flex-basis-0 flex-col gap-20'>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      
    </div>
    </div>
  )
});

export default MyResume
