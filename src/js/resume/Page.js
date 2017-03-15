import React from 'react';
import ResumeSection from './ResumeSection';
import ResumeContent from '../../data/ResumeContent';
import Divider from 'material-ui/Divider';
var ReactGA = require('react-ga');
ReactGA.initialize('UA-93732020-1');

class Resume extends React.Component {

    componentDidMount() {
        logPageView();
    }

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
                <p style={{
                    paddingLeft: '15px'
                }}> Living in Portsmouth New Hampshire, USA </p>

                <ResumeSection content={ResumeContent.experience}/>
                <ResumeSection content={ResumeContent.skills}/>
                <ResumeSection content={ResumeContent.education}/>
            </div>
        );
    }
}

function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

module.exports = Resume;


