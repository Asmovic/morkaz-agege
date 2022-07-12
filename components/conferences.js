import React from "react"
import VerticalCard from "./VerticalCard"
import { Element } from "react-scroll"

const testimonials = [
  {
    testimonial:
      "I hired Ibrahim to help with our company's re-branding and growth effort, He was reliable, flexible, dedicated and fully responsive. I highly recommend him for any role that may require his skills and expertise.",
    name: "Soewu Taiwo",
    linkedin: "https://ng.linkedin.com/in/oluwasetty",
    jobTitle: "Software Engineer",
  },
  {
    testimonial:
      "He's a very good developer with passion to make a difference. He's built a lot of applications and I really would endorse him.",
    name: "Orobiyi Faidah",
    linkedin: "https://www.linkedin.com/in/faidah-orobiyi-383a471a8/",
    jobTitle: "Data Analyst",
  }
]

function Conferences() {
  return (
    <Element name="conferences" className="element">
      <div className="p-8">
        <h2 className="text-3xl lg:text-5xl custom-box-shadow inline-block my-4">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <VerticalCard testimonial={testimonial} key={idx} />
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Conferences
