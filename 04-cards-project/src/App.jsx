import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
    {
      brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://www.logodesign.org/img/ba8e1d9cd75515a9.png",
      name: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "data:image/jpeg;base64,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",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$48/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "data:image/png;base64,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",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtenCcK5gLSfMI_OkusxEDjvIToqEdDVqbdcMbgSIzwg&s=10",
      name: "Apple",
      datePosted: "4 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$52/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hKvQtzP8Sysld7IjuXoQ9WQaCC9q9exmWc76G38lew&s=10",
      name: "Netflix",
      datePosted: "3 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4cvli6tFMgdWcZvqveTrFNk96w_cYzntM68jcWoYfA&s=10",
      name: "NVIDIA",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$46/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFm1eXmw8et-ZJUIpiJ0dEfS2jFb-VntryJgA_v1hb2g&s=10",
      name: "Adobe",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$43/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8HIXB2N3V_6iYA2szt31_DFoGk5FvLmS0cCNbGoaAQ&s=10",
      name: "Salesforce",
      datePosted: "2 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$50/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmnIQfgCkJsWzxkNBjANLU7AQ1oIzRK7AECH75FJNow&s=10",
      name: "Oracle",
      datePosted: "10 weeks ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Bengaluru, India"
    }
  ];

  return (
    <div className='parent'>
      {jobs.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.name} logo={elem.brandLogo} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App