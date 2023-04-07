import React from 'react'


const Resume5 = (props) => {
  const {phoneNumber,description,experiences,email,freelancerHobbies,freelancerImage,educations,freelancerPosition,firstName,lastName,address}= props
    return (
        <>
          <div className="ComplateResume">
            <div className="resume2_5 resume-watch">
              <div className="resume2_5__top-contents">
                <div className="resume2_5-top-left">
                  <div className="resume2_5-top-left-name">
                    <span className="resume2_5-firstname">
                      {firstName}
                    </span>
                    <br />
                    <span className="resume2_5-lastname">
                      {lastName} 
                    </span>
                    <p className="resume2_5-job">
                      Frontend devoloper
                    </p>
                  </div>
                </div>
    
                <div className="resume2_5-top-right">
                  <div className="resume2_5-user-img">
                    <img src={`http://localhost:5000/staticfiles/${freelancerImage}`} alt={firstName}/>
                  </div>
                </div>
              </div>
    
              <div className="resume2_5-bottom">
                <div className="resume2_5-bottom-left">
                  <div className="resume2_5-bottom-left-wrapper">
                    <div className="resume2_5-bottom-title res2_5_color1">
                      education
                    </div>
                    <ul className="resume2_5-bottom-text-div">
                      {educations?.map((item, i) => {
                        return (
                          <li key={i + 1}>
                            <b>{item?.educationDegree}</b>
                            <p>{item?.schoolName}</p>
                            <span>
                              {item?.startDate?.substring(0, 4)} -{" "}
                              {item?.endDate?.substring(0, 4)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
    
                    <div className="resume2_5-bottom-title res2_5_color1">
                      experience
                    </div>
                    {experiences?.map((item, i) => {
                      return (
                        <div className="resume2_5-bottom-text-div" key={i + 1}>
                          <div className="resume2_5-bottom-text">
                            <b>{item?.job}</b>
                            <br />
                            <br />
                            <div>
                              <span className="resume2_5-year">
                                {item?.startDate?.substring(0, 4)} -{" "}
                                {item?.endDate?.substring(0, 4)}
                              </span>
                              <span>{item?.companyName}</span>
                            </div>
                            <br />
                            <p>{item?.descripeion}</p>
                          </div>
                        </div>
                      );
                    })}
    
                    <div className="resume2_5-bottom-title res2_5_color1">
                      expertise
                    </div>
                    <ul className="resume2_5-bottom-circles">
                      {freelancerPosition?.freelancerSkills?.map((item, i) => {
                        return (
                          <li className="resume2_5-bottom-circle" key={i + 1}>
                            <span>{item.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
    
                <div className="resume2_5-bottom-right">
                  <div className="resume2_5-bottom-right-wrapper">
                    <div className="resume2_5-bottom-title res2_5_color2">
                      About me
                    </div>
                    <div className="resume2_5-bottom-right-text">
                      <p>{description}</p>
                    </div>
    
                    <div className="resume2_5-bottom-title res2_5_color2">
                      contacts
                    </div>
                    <div className="resume2_5-bottom-right-contacts">
                      <div>
                        <b>Phone:</b>
                        <p>{phoneNumber}</p>
                      </div>
    
                      <div>
                        <b>Email:</b>
                        <p>{email}</p>
                      </div>
    
                      <div>
                        <b>Area:</b>
                        <p>{address?.countryName} {" "} {address?.regionName} {" "} {address?.home}</p>
                      </div>
                    </div>
    
                    <div className="resume2_5-bottom-title res2_5_color2">
                      hobbies
                    </div>
                    <ul className="resume2_5-bottom-right-hobbies">
                      {freelancerHobbies?.map((item, i) => {
                        return (
                          <li key={i + 1}>
                            <p>{item.name}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default Resume5