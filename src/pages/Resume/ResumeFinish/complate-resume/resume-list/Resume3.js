import React from 'react'
import corPic1 from "../img/corPic1.png";
import corPic2 from "../img/corPic2.png";
import resumebg2 from "../img/resumebg2.png";
import resume3bg2 from "../img/resume3bg2.png";
const Resume3 = ({phoneNumber,description,experiences,email,freelancerContact,freelancerImage,educations,freelancerPosition,firstName,lastName}) => {
  return (
    <>
        <div className="ComplateResume">
            <div className="resume2_3 resume-watch">
              <div className="resume2_3-left">
                <div className="resume2_3-left-top">
                  <img className="corPic1" src={corPic2} alt='img1'/>
                  <img className="corPic2" src={corPic1} alt='img1'/>
                  <img className="userPic" src={`http://localhost:5000/staticfiles/${freelancerImage}`} alt='img1'/>
                </div>
                <div className="resume2_3-left-bottom">
                  <div className="resume2_3-left-bottom-contacts">
                    <div>
                      {" "}
                      <span className="bottom-contacts-icon"> p </span>{" "}
                      <span>
                        {phoneNumber}
                      </span>
                    </div>
                    <div>
                      {" "}
                      <span className="bottom-contacts-icon"> m </span>{" "}
                      <span>
                        {email}
                      </span>
                    </div>
                    <div>
                      {" "}
                      <span className="bottom-contacts-icon"> w </span>{" "}
                      <span>
                        {freelancerContact?.webSite}
                      </span>
                    </div>
                  </div>
                  <div className="resume2_3-bottom-title title-bg-cl1">
                    education
                  </div>
                  {educations?.map((item, i) => {
                    return (
                      <div className="resume2_3-left-bottom-degree" key={i + 1}>
                        <b>{item?.educationDegree}</b>
                        <br />
                        <span>{item?.schoolName}</span>
                        <br />
                        <span>
                          {item?.startDate?.substring(0, 4)} -{" "}
                          {item?.endDate?.substring(0, 4)}
                        </span>
                      </div>
                    );
                  })}
  
                  <div className="resume2_3-bottom-title title-bg-cl1">
                    skills
                  </div>
  
                  <div className="resume2_3-left-bottom-skills">
                    {freelancerPosition?.freelancerSkills?.map((item, i) => {
                      return (
                        <div className="bottom-skills-item" key={i + 1}>
                          <p className="skills-text">{item.name}</p>{" "}
                          <p className="skills-level"></p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
  
              <div className="resume2_3-right">
                <div className="resume2_3-right-top">
                  <img className="right-top-img" src={resumebg2} alt="background img"/>
                  <div className="resume2_3-right-top-name">
                    {firstName} {lastName}
                  </div>
  
                  <div>
                    <div className="resume2_3-right-top-job">
                      {freelancerPosition?.name}
                    </div>
                    <div className="resume2_3-right-top-just"></div>
                    <img src={resume3bg2} alt='img'/>
                  </div>
                </div>
  
                <div className="resume2_3-right-bottom">
                  <div className="resume2_3-bottom-title title-bg-cl1">
                    profile
                  </div>
                  <div className="resume2_3-right-bottom-profile">
                    {description}
                  </div>
                  <div className="resume2_3-bottom-title title-bg-cl2">work</div>
                  {experiences?.map((item, i) => {
                    return (
                      <div className="resume2_3-right-bottom-cd" key={i + 1}>
                        <div className="bottom-cd-1">
                          <b>{item.job}</b>{" "}
                          <span>
                            {item?.startDate?.substring(0, 4)} -{" "}
                            {item?.endDate?.substring(0, 4)}
                          </span>
                        </div>
  
                        <div className="bottom-cd-2">{item?.companyName}</div>
  
                        <div className="bottom-cd-3">{item?.descripeion}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Resume3