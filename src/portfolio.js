import emoji from 'react-easy-emoji';

import ietechlogo from './assets/img/icons/common/ietech.png'
import churchpluslogo from './assets/img/icons/common/churchplus.png'
import code30logo from './assets/img/icons/common/Code360.jpg'

export const greetings = {
    "name": "Afe Ayokunle",
    "title": "Welcome here, I'm Ayokunle",
    "descriptionLess": "A software engineer with a PASSION for developing efficient and innovative solutions that speed up organizational success. Well-versed in writing code to create systems that are reliable and user-friendly. In leading roles I have proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.",
    "description": "A software engineer with a PASSION for developing efficient and innovative solutions that speed up organizational success. Well-versed in writing code to create systems that are reliable and user-friendly. In leading roles I have proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator(selling the organization goals to team members), strategic thinking that lead to solid and convincing product designs, and innovative creator to develop software that is customized to meet a company’s organizational needs.",
    "resumeLink": "https://docs.google.com/document/d/1yW5yb9Q8g9AlkOVgPdTOm3AdbotnNSnF9YDzbQy8Bbw/edit?usp=sharing"
}

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {
  
}

export const socialLinks = {
  "gmail": "mailto:afeexclusive@gmail.com",
  "facebook": "https://facebook.com/afekunle",
  "github": "https://github.com/afeexclusive",
  "linkedin": "https://www.linkedin.com/in/ayokunle-afe/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly performant Server side for your web and mobile applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in Blazor SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ Azure Services / Paystack/ Flutterwave'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      // {
      //   skillName: 'sass',
      //   fontAwesomeClassname: 'logos:sass',
      // },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      
      {
        skillName: 'Azure',
        fontAwesomeClassname: 'logos:microsoft',
      },
      // {
      //   skillName: 'TypeScript',
      //   fontAwesomeClassname: 'logos:typescript-icon',
      // },
      // {
      //   skillName: 'reactjs',
      //   fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      // },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      // {
      //   skillName: 'flutter',
      //   fontAwesomeClassname: 'logos:flutter',
      // },
      // {
      //   skillName: 'swift',
      //   fontAwesomeClassname: 'vscode-icons:file-type-swift',
      // },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      // {
      //   skillName: 'python',
      //   fontAwesomeClassname: 'logos:python',
      // },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      }
      // {
      //   skillName: 'docker',
      //   fontAwesomeClassname: 'logos:docker-icon',
      // },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '60', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '95',
    },
    {
      Stack: 'Programming',
      progressPercentage: '90',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'National Open University of Nigeria',
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'Feb 2020',
      desc: 'Design and analyze algorithms to solve programs...',
      descBullets: [
        'Interests At School',
        'Object Oriented Programming',
        'Modelling and Expert Systems',
      ],
    },
    {
      schoolName: 'Federal College Of Education',
      subHeader: 'National Cert. in Education(Physics/Computer Sci)',
      duration: 'July 2007',
      desc: 'High School Educator of Physics/Computer Sci.',
      descBullets: [
        'Interests At School',
        'Programming(structural:GW-Basic, VB, VB.Net)',
        'Hardware trouble shooting',
      ],
    }
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'IeTech Limited',
    companylogo: ietechlogo,
    date: 'Aug 2021 - Present',
    desc:
      'Roles',
    descBullets: [
      'Migrating/converting .Net  Applications to cross-platform .Net core Applications',
      'Support existing codebases and peer review code changes',
      'Enhancing applications by identifying opportunities for improvement',
      'Making recommendations, designing and implementing systems'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'ChurchPlus',
    companylogo: churchpluslogo,
    date: 'May 2020 – Augus 2021',
    desc:
      'Roles',
    descBullets: [
      'Maintaining and improving existing codebases and peer review code changes',
      'Enhancing applications by identifying opportunities for improvement',
      'Making recommendations, designing and implementing systems',
      'Investigating and using new technologies where relevant',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Code 360',
    companylogo: code30logo,
    date: 'Oct 2019 - Jan 2020',
    desc:
      'Roles',
    descBullets: [
      'Study existing Asp.Net MVC applications and optimize existing features.',
      'Participate in solution design and breaking features into sprints',
      'Build and maintain Desktop applications',
      'Work with team members to deliver features in live applications',
      'Contribute to .Net API codes for backend services'
    ],
  },
]

export const projects = [
  {
    name: "ChurchPlus(API services) - Team Lead",
    desc: "AGILE MEHTODOLOGY - One software to automate entire church management from increasing church attendance, first timer guest retention, church remittance(Paystack, Flutterwave integration), communication(Email and Personalized Bulk SMS service) to overall church administration",
    link: {
      name: "ChurchPlus",
      url: ""
    }
  },
  {
    name: "CBN - BDC Fx Automation(API & Desktop) - Team Member",
    desc: "A Web Application .Net Core MVC (Manages operations), API services available for desktop and mobile applications. Mobile App: Crowd Control(Covid-19 requirement). Desktop App: Biometric capture and payout verification with POS printing",
    link: {
      name: "Not Public",
      url: ""
    }
  },
  {
    name: "POS Error Log Analysis Application - Single",
    desc: "API services available for any client technology to display the log errors in thier various critical levels and archive logs at user defined periods",
    link: {
      name: "Log Analyzer",
      url: ""
    }
  },
  {
    name: "Waka - Team Lead",
    desc: "API services that drives a mobile app which helps people navigate public places in Lagos. Provides users with front view pictures, connect to google map to drive to the location, office phone numbers etc",
    link: {
      name: "Play Store",
      url: ""
    }
  }
]