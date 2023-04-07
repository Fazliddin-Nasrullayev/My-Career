import React from 'react'

const Resume1 = (props) => {
    const {phoneNumber,description,experiences,email,freelancerHobbies,freelancerImage,educations,freelancerPosition,firstName,lastName,address,userLanguages,birthday}= props
  return (
    <>
        <div className="ComplateResume">
            <div className="resume2_1 resume-watch">
                <div className="resume2_1-head">
                <p className="resume2_1-head-name">
                    {firstName} {lastName}
                </p>
                <p className="resume2_1-head-job">
                    Frontend developer
                </p>
                </div>
                <div className="resume2_1-body">
                <div className="resume2_1-left">
                    <div className="resume2_1-left-img">
                    <img src={`http://localhost:5000/staticfiles/${freelancerImage}`}  alt={firstName}/>
                    <span>personal info</span>
                    </div>
                    <hr />

                    <div className="resume2_1-left-contacts">
                    <div className="resume2_1-left-contacts__texts">
                        <p className="resume2_1-left-contacts__text">phone:</p>
                        <span>
                        {phoneNumber}
                        </span>
                    </div>

                    <div className="resume2_1-left-contacts__texts">
                        <p className="resume2_1-left-contacts__text">email:</p>
                        <span>
                        {email}
                        </span>
                    </div>

                    <div className="resume2_1-left-contacts__texts">
                        <p className="resume2_1-left-contacts__text">skills</p>
                        {freelancerPosition?.freelancerSkills?.map((item, i) => {
                            return <span key={item.id}>{item.name}</span>;
                        })}
                    </div>

                    <div className="resume2_1-left-contacts__texts">
                        <p className="resume2_1-left-contacts__text">languages</p>
                        {userLanguages?.map((item, i) => {
                        return (
                            <span key={i}>
                                {item?.language} - {item?.level}
                            </span>
                        );
                        })}
                    </div>

                    <div className="resume2_1-left-contacts__texts">
                        <p className="resume2_1-left-contacts__text">Hobbies</p>
                        {freelancerHobbies?.map((item, i) => {
                            return <span key={item.id}>{item.name}</span>;
                        })}
                    </div>

                    <div className="resume2_1-left-contacts__texts">
                        <p className="resume2_1-left-contacts__text">
                        Work experience
                        </p>
                        {experiences?.map((item, i) => {
                            return <span key={i + 1}>{item?.companyName}</span>;
                        })}
                    </div>

                    <div className="resume2_1-left-contacts__texts">
                        <p className="resume2_1-left-contacts__text">Education</p>
                        {educations?.map((item, i) => {
                        return <span key={i}>{item?.schoolName}</span>;
                        })}
                    </div>
                    </div>
                </div>

                <div className="resume2_1-right">
                    <div className="resume2_1-right-head">
                    
                    <p>
                        {birthday}
                    </p>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>
                        Frontend developer
                    </p>
                    </div>

                    <div className="resume2_1-right-body">
                    <div className="resume2_1-right-body-text">
                        {description}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resume1