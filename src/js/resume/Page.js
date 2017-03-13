import React from 'react';
import ResumeSection from './ResumeSection';
import ResumeContent from '../../data/ResumeContent';
import Divider from 'material-ui/Divider';


class Resume extends React.Component {
    render() {
        return (
            <div style={{
                width: '90%',
                margin: '10px auto 10px auto',
            }}>
                <h2 style={{
                    paddingLeft: '15px'
                }}> Jesse O'Connor </h2>
                <Divider />
                <h3 style={{
                    paddingLeft: '15px'
                }}> 1001 Islington St. Unit #31 Portsmouth, NH 03801,      (603)731-5283,      JESSEKOCONNOR@GMAIL.COM </h3>

                <ResumeSection content={ResumeContent.experience}/>
                <ResumeSection content={ResumeContent.skills}/>
                <ResumeSection content={ResumeContent.education}/>
            </div>
        );
    }
}

module.exports = Resume;


