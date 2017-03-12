import React from 'react';
import ResumeSection from './ResumeSection';
import ResumeContent from '../../data/Content';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <ResumeSection content={ResumeContent.experience}/>
                <ResumeSection content={ResumeContent.skills}/>
                <ResumeSection content={ResumeContent.education}/>
            </div>
        );
    }
}

module.exports = Resume;


