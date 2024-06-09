// import apiary from '../images/apiary.svg';
import portland from '../images/maine_lighthouse.jpeg';
import learn from '../images/learn.png';
import acc from '../images/plastic.png';
import portfolio from '../images/placeholder.png';

export const projects = [
  {
    key: 1,
    name: 'Awesome Container Company',
    desc: 'In 2022, I helped build a website for the Awesome Container Company, an app based logistics company in Singapore.',
    link: 'https://awesomecontainer.com/',
    img: acc,
    alt: 'turtle in an ocean teeming with life munching on a red piece of seaweed',
    tags: ['React', 'Animation', 'Carousel'],
  },
  {
    key: 2,
    name: 'From Portland to Portland',
    desc: 'This is a website I built for my bootcamp. It houses photos depicting road trip stops from Portland, OR to Portland, ME.',
    link: 'https://renitam.github.io/web_project_3/',
    img: portland,
    alt: 'a lighthouse surrounded by pine trees sitting on a cliff overlooking the ocean',
    tags: ['Vanilla JS', 'CSS Grid'],
  },
  {
    key: 3,
    name: 'Learning How to Learn',
    desc: 'I took my first stab at flexbox and absolute positioning. It was my first time using HTML & CSS. I enjoyed putting this website together because it features some of my favorite learning resources.',
    link: 'https://renitam.github.io/web_project_1/',
    img: learn,
    alt: 'a handle holding 6 books including 101 essays that will change the way you think by brianna west',
    tags: ['Vanilla JS', 'Flexbox'],
  },
  {
    key: 4,
    name: 'Around the US',
    desc: 'This is a website I have rebuilt multiple times: first in Vanilla JS, then in React. I also used Node.js to make it a fullstack product with registration, authentication and security protocols.',
    link: 'https://renitam.github.io/around-react/',
    img: '#',
    alt: '',
    tags: ['MongoDB', 'Express', 'React', 'Nginx'],
  },
  {
    key: 5,
    name: 'My Portfolio',
    desc: 'This portfolio was created using a Figma design that I customized. The website features CSS gradients and interchangeable projects that viewers can inspect and interact with.',
    link: 'https://renitam.github.io/portfolio/',
    img: portfolio,
    alt: 'A screenshot of the header section of my first portfolio website.',
    tags: ['React', 'Styled Components', 'Carousel', 'CSS Gradients'],
  },
];

export const template = {
  name: 'Project Title',
  desc: 'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
  tag: 'Mobile App',
  link: 'renitam.github.io/portfolio',
};

export const resume = [
  {
    key: 1,
    company: 'Coda',
    role: 'Customer Champion',
    tenure: 'July 2020 - Present',
    desc: 'Supporting makers at Coda with onboarding, bug reporting & doc troubleshooting.',
  },
  {
    key: 2,
    company: 'Fictiv',
    role: 'Customer Experience Specialist',
    tenure: 'Sept 2019 - Feb 2020',
    desc: 'Handled customer inquiries through Intercom and phone calls using MightyCall. Partnered with product and engineering teams to communicate customer issues and assist with prioritizing bugs in JIRA. Collaborated with technical application engineers and QA on customer specs to ensure that customer requests are delivered.',
  },
  {
    key: 3,
    company: 'Noom',
    role: 'User Support Specialist',
    tenure: 'Aug 2015 - Nov 2015',
    desc: 'Provided email support to customers in a timely manner, ranging from bugs and account support to signing up new users. Helped migrate our support team from Uservoice to Zendesk. Communicated defects and customer feedback to internal stakeholders.',
  },
  {
    key: 4,
    company: 'Enrollment Advisor',
    role: 'Pearson Online & Blended Learning',
    tenure: 'Jul 2016 - Aug 2018',
    desc: 'Assisted families during enrollment periods in a call-center environment for online public-schools. Reviewed document submissions and reviewed to ensure families met state guidelines. Provided internal customer service to schools and served as a liaison for enrolling parents.',
  },
];
