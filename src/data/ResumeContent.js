import TallBrussels from '../../images/other/tall_pic.png';
import UNH from '../../images/other/unh.jpg';
import Hiking from '../../images/other/hiking.jpeg';

module.exports = {
  experience: {
    overlay: {
      title: 'Experience',
      imageURL: TallBrussels,
    },

    subCards: [
      {
        title: 'Meta',
        subTitle: 'Remote: 2020 to Present',
        cardText: [{
          paragraphs: ['Individual Contributor Level 5 (IC5) Jun 2022 - Present'],
          bullets: [
            'Reduced bugs in routing domain by 96% by incepting and leading a team of 3 to deliver on two separate refactor based projects',
            'Given an ambiguous problem (key usability issues), Jesse proposed a highly scalable and reliable solution which lead to high adoption and relief of a key usability issue',
            'Ultimately responsible for the success of the teams projects; Facilitator of project updates and estimations; Responsible for the teams success',
            'Mentored L4 engineer on topics such as tolerating ambiguity, shifting from being task oriented to goal oriented, and increasing his quality of work by leveraging testing',
            'Delivered an org wide presentation on Nodejs that covered how it accomplishes concurrency and how it utilizes libuv for worker pools and the event loop and why you should not block it',
          ]
        }, {
          paragraphs: ['Individual Contributor Level 4 (IC4) Nov 2020 - Jun 2022'],
          bullets: [
            'Led weekly team knowledge sharing meetings covering concepts like event driven architectures, how to use SQS visibity timeout to expose a simply ack/nack api, and in depth coverage of internal architecture and services.',
            'Discovers early on when a project is behind schedule and gets it back on track quickly. ex: add more resources, narrow existing scope, or re-prioritize',
            'Brought integration coverage to new domains, increased integration test accessibility for other devs, helped other engineers to see the confidence/timeSaved that integration tests and tdd can provide',
          ]
        }],
        expander: true,
      },
      {
        title: 'Meltwater',
        subTitle: 'Manchester, NH: 2014 to 2019',
        cardText: [{
          paragraphs: ['Senior Software Engineer  DEC  2018 - PRESENT'],
          bullets: [
            'Responsible for full stack solutions including dev, testing, deployment, monitoring, on-call, post-mortem/prevention, cdn configuration, security',
            'Created command line utility that automated GDPR compliance; Deleted user data with complex queries saving my team hours of manual queries',
            'Migrated internally hosted services to SQS invoked lambda functions using SAM, Implemented VPC w/ static IP’s for the functions, aiding company goal of terminating a decade old data hosting contract',
            'Efficiently removed several 40gig mongo collections using a smart page & walk strategy; Averted database from locking up and customer downtime'
          ]
        }, {
          paragraphs: ['Software Engineer II  JAN 2017 - 2018'],
          bullets: [
            'Created a routing service in front of staging application allowing for different feature branches to be available to be tested via url path; Enabled PO to view all work in progress simultaneously. Other teams followed suite',
            'Learned and pushed team to utilize es6 resulting in more efficient code; Improved team members skill sets resulting in increased marketability of coworkers',
            'Created email stats sql database that ran queries to aggregate on various customer level stats; Customers could see aggregations instantaneously; Database is 300 gig and growing',
            'Mentored 3 jr. team members, increasing their value at a rapid pace; All mentees are promoted and still working at meltwater.',
            'Provided significant guidance and value in groomings to ensure team is considering accurate estimates; Guided focus toward features with significant customer value and high return technical work'
          ]
        }, {
          paragraphs: ['Software Engineer I  JAN 2015 - 2017'],
          bullets: ['Migrated front end of application to AWS’ Elastic Beanstalk; This took front end deploy time from hours to minutes and stressful to stressless',
            'Pushed for team to be company\'s first into AWS; Chose ECS; Effectively set an example for other teams to follow us into AWS. I personally paid and expensed the bill for > 6 months',
            'Learned how to write a robust command line tool while creating a developer toolkit for my team\'s most repetitive tasks (e.g. naming ssh tunnels, starting local sets of services, checking package version of remote servers); Still in use today, saving teammates countless hours or work',
            'Chosen to represent the team among the company\'s platform engineers for 30 days in Gothenburg, Sweden',
            'Built highly scalable email pipeline that sends 0.5 million emails per day after transitioning to a Kanban working style'
          ]
        }, {
          paragraphs: ['Jr. Software Engineer  JAN 2013 - 2015'],
          bullets: ['Grew comfortable with Angularjs, Node, and Mongo stack',
            'Learned how to operate efficiently in a scrum environment',
            'Learned test driven development, increasing speed at which I develop code',
            'Built continuous delivery pipeline automating deployment'
          ]
        }],
        expander: true,
      },
      {
        title: 'UNH InterOperability Laboratory',
        subTitle: 'Durham, NH: 2009 to 2013',
        cardText: [{
          paragraphs: ['Developer and Test Technician of networking and data communication testing services.'],
          bullets: [
            'Founder of VoIP Remote Test Bed Service',
            'Developed packaging automation for core product IOL-Intact',
            'Cultivated and maintained DHCPv6 test suites based on RFC specifications for core product',
          ],
        }],
        expander: true,
      },
    ],
  },
  education: {
    overlay: {
      title: 'Education',
      imageURL: UNH,
      shortImage: true,
    },

    subCards: [
      {
        title: 'BS in Computer Science',
        subTitle: 'UNH (2009 to 2013)',
        cardText: [{
          paragraphs: ['Bachelors of Science in Computer Science', 'Notable courses:'],
          bullets: [
            'Artificial Intelligence',
            'Algorithms',
            'Data Structures',
            'Computer Networks',
            'Graphics',
            'Assembly Language & Machine Organization',
            'Operating System Fundamentals',
            'Programming Language Concepts and Feature',
          ],
        }],
        expander: true,
      },
    ],
  },
  skills: {
    overlay: {
      title: 'Skilled in',
      imageURL: Hiking,
      imageTop: true,
    },

    subCards: [
      {
        title: 'Node.js',
        subTitle: '9+ years experience and a contributor to the nodejs project',
      },
      {
        title: 'MongoDB',
        subTitle: '9+ years experience',
      },
      {
        title: 'Distributed and event driven systems',
        subTitle: '5+ years experience',
      },
      {
        title: 'Integration testing',
        subTitle: '5+ years experience, very passionate about this and it\'s benefits',
      },
      {
        title: 'Tooling Proficiencies',
        subTitle: 'Kibana, DD custom metric experience, vim, git, jira',
      },
      {
        title: 'Methodologies',
        subTitle: 'Scrum, Continuous Deployment, KanBan, Test Driven Development',
      },
      {
        codeTitle: '$> vim ~/.bash_profile',
        subTitle: 'I have a passion for cultivating the perfect bash profile to streamline my workflow',
      },
    ],
  }
};