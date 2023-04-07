/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import phone from "../img/phone.svg";
import loc from "../img/location.svg";
import letter from "../img/letter.svg";

const Resume6 = (props) => {
  const {phoneNumber,description,experiences,email,freelancerContact,freelancerImage,educations,freelancerPosition,firstName,lastName,address,userLanguages}= props
    return (
        <>
          <div className="ComplateResume">
            <div className="resume2_6 resume-watch">
              <div className="resume2_6-top">
                <div className="resume2_6-top-left">
                  <div className="resume2_6-top-left-name">
                    <p className="resume2_6-top-left-user-name">
                      Lorem ipsum dolor
                      {firstName} {lastName}
                    </p>
                    <p className="resume2_6-top-left-user-job">
                      {freelancerPosition?.name}
                    </p>
                  </div>
    
                  <div className="resume2_6-top-left-user-contact">
                    <p>
                      {" "}
                      <img src={phone} />
                      {phoneNumber}
                    </p>
                    <p>
                      {" "}
                      <img src={letter} />
                      {email}
                    </p>
                    <p>
                      {" "}
                      <img src={loc} />
                      {address?.countryName} {address?.regionName}{" "}
                      {address?.home}
                    </p>
                    <p>
                      {" "}
                      <img src={loc} />
                      {freelancerContact?.webSite}
                    </p>
                  </div>
                </div>
    
                <div className="resume2_6-top-right">
                  <img
                    className="resume2_6-top-right-img"
                    src={`http://localhost:5000/staticfiles/${freelancerImage}`}
                  />
                </div>
              </div>
    
              <div className="resume2_6-bottom">
                <div className="resume2_6-bottom-left">
                  <p className="resume2_6-bottom-title">profile</p>
                  <div className="resume2_6-bottom-left-text">
                    <span>
                     {description}
                    </span>
                  </div>
    
                  <div className="resume2_6-bottom-title">education</div>
                  <div className="resume2_6-bottom-left-text">
                    {educations?.map((item, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div >
                            <b>{item?.schoolName}</b>{" "}
                            <span>
                              {item?.startDate?.substring(0, 4)} -{" "}
                              {item?.endDate?.substring(0, 4)}
                            </span>
                          </div>
                          <p>{item?.educationDegree}</p>
                        </React.Fragment>
                      );
                    })}
  
                  </div>
    
                  <div className="resume2_6-bottom-title">language</div>
                  <div className="resume2_6-bottom-left-text">
                    <div className="language-lvl">
                      {
                        userLanguages?.map((item, i) => (
                          <React.Fragment key = {i + 1}>
                            <span>{item?.language}</span>
                            <p className="resume2_6-cirlces"></p>
                            <p className="resume2_6-cirlces"></p>
                            <p className="resume2_6-cirlces"></p>
                            <p className="resume2_6-cirlces"></p>
                            <p className="resume2_6-cirlces"></p>
                            <p className="resume2_6-cirlces"></p>
                            <p className="resume2_6-cirlces"></p>
                          </React.Fragment>
                        ))
                      }
                    </div>
                  </div>
                </div>
    
                <div className="resume2_6-bottom-right">
                  <div className="resume2_6-bottom-title">work experience</div>
                  {experiences?.map((item, i) => {
                    return (
                      <div className="resume2_6-bottom-left-text" key={i + 1}>
                        <div>
                          <b>{item?.job}</b>
                          <b>
                            {item?.startDate?.substring(0, 4)} -{" "}
                            {item?.endDate?.substring(0, 4)}
                          </b>
                          <p>{item?.companyName}</p>
                        </div>
                        <div>{item?.descripeion}</div>
                      </div>
                    );
                  })}
    
                  <div className="resume2_6-bottom-title">skills</div>
                  <div className="resume2_6-bottom-left-text">
                    {freelancerPosition?.freelancerSkills?.map((item, i) => {
                      return (
                        <div key={i + 1}>
                          <b>{item.name}</b>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Resume6