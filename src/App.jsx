// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from './components/NavBar'
import All from './components/All'
import Fullstack from './components/Fullstack'
import Datascience from './components/Datascience'
import Cyber from './components/Cyber'
import Career from './components/Career'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

function App() {
  let fullstack =[
    {
      id: 1,
      title: "Top 10 Tools Every Full-Stack Developer Should Master in 2024",
      src: "https://i.postimg.cc/yxgZTz5h/html-css-collage-concept-with-person.jpg",
      content:
        "As a full-stack developer, having the right set of tools is crucial for your success",
      date: "3 August 2023",
      comments: "No comments",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Real-World Full-Stack Development Applications",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-1536x804.png",
      content:
        "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can",
      date: "27 July 2023",
      comments: "No comments",
    },
    {
      id: 3,
      title: "Best Ways to Learn Full Stack Development in 2024",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
      content:
        "Full stack development is and will be a promising and in-demand career in the upcoming",
      date: "26 July 2023",
      comments: "No comments",
    },
    {
      id: 4,
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      content:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
      date: "15 November 2023",
      comments: "No comments",
    },
    {
      id: 5,
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      content:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date: "15 November 2023",
      comments: "No comments",
    },
    {
      id: 6,
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      content:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date: "10 November 2023",
      comments: "No comments",
    }
  ]

  let datascience=[
    {
      id: 7,
        title: "10 Best Data Science Frameworks in 2024",
        src: "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg",
        content:
          "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
        date: "5 August 2023",
        comments: "No comments",
    },
    {
      id: 8,
        title: "A Complete Data Scientist Roadmap for Beginners",
        src: "https://www.guvi.in/blog/wp-content/uploads/2023/07/13311397_v617batch2-kul-05-technology-1-1536x1024.jpg",
        content:
          "Do you want to pursue a career in Data Science? If so then you must’ve",
        date: "28 July 2023",
        comments: "No comments",
    },
    {
      id: 9,
        title: "A Profound Data Scientist’s Career Path 2024",
        src: "https://www.guvi.in/blog/wp-content/uploads/2022/12/image-15.png",
        content:
          "All kinds of organizations ranging from retail to government, to healthcare heavily depend on data scientists.",
        date: "27 July 2023",
        comments: "No comments",
    },
    {
      id: 10,
        title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
        src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Ways-To-Use-AI-in-UX-Design.webp",
        content:
          "Are you someone who’s not interested in coding, but wants to get placed in tech",
        date: "28 November 2023",
        comments: "No comments",
    },
     {
      id: 11,
      title: "Top Product-Based Companies for Data Science Freshers",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      content:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "10 November 2023",
      comments: "No comments",
    },
    {
      id: 12,
      title: "What is the Difference between Data Science and Data Engineering?",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      content:
        "India has been making some serious waves in the world of data. Just like the",
      date: "08 November 2023",
      comments: "No comments",
    },
  ]
  let cyber= [
    {
      id: 13,
      title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      src: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      content:
        "Look around today, you will witness that we are more reliant on technology and devices",
      date: "04 December 2023",
      comments: "No comments",
    },
    {
      id: 14,
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      src: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      content:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      date: "02 December 2023",
      comments: "No comments",
    },
    {
      id: 15,
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      src: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      content:
        "Cybersecurity is an exact solution that is sought either by a billionaire with a massive",
      date: "04 December 2023",
      comments: "No comments",
    },
    
      {
        id: 16,
        title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        content:
          "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
        date: "04 December 2023",
        comments: "No comments",
      },
      {
        id: 17,
        title: "What Is Hacking? Types of Hacking & More",
        src: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        content:
          "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
        date: "25 December 2023",
        comments: "No comments",
      },
      {
        id: 18,
        title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        content:
          "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
        date: "04 December 2023",
        comments: "No comments",
      },
  ]

  let career =[
    {
      id: 19,
      title: "Top 5 IT Jobs for Economics Students",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      content:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      date: "04 December 2023",
      comments: "No comments",
    },
    {
      id: 20,
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      content:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "04 December 2023",
      comments: "No comments",
    },
    {
      id: 21,
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      content:
        "The world is moving towards automating the testing of products in order to increase work",
      date: "03 December 2023",
      comments: "No comments",
    }
  ]

  let all = [...fullstack,...datascience, ...cyber, ...career]
  return (
    <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/all' element={<All cards={all}/>}/>
    <Route path='/fullstack' element={<Fullstack cards={fullstack}/>}/>
    <Route path='/datascience' element={<Datascience cards={datascience} />} />
    <Route path='/cyber' element={<Cyber cards={cyber}/>}/>
    <Route path='/career' element={<Career cards={career}/>}/>
    <Route path ='*' element={<Navigate to={'/all'} replace/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
