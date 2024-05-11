import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";
import "./Education.css";
// import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <h2 className="exp-heading" style={{ textAlign: "center" }}>
        Education 
      </h2>
      <div className="experience">
        <VerticalTimeline lineColor="#fd0c99">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2016"
            iconStyle={{ background: "black", color: "yellow" }}
            icon={<IoSchoolOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              21-st Century matric Hr Sec School-Sivagangai
            </h3>
            <p className="timeline-sub"> Higher Secondary School</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2020"
            iconStyle={{ background: "black", color: "yellow" }}
            icon={<IoSchoolOutline />}
          >
            <h3 className="vertical-timeline-element-title">
               
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree - B.Tech
            </h4>

            <p className="timeline-sub">
              Handloom and Textile Technology
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan/2024 - May/2024"
            iconStyle={{ background: "black", color: "yellow" }}
            icon={<IoSchoolOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Web Development(MERN)-Innovate Technologies
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Chennai, Tamilnadu
            </h4>
            <p className="timeline-sub">Full Stack Development</p>

          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month-Year to Month-Year"
            iconStyle={{ background: "black", color: "#e9d35b" }}
            icon={<BsSuitcaseLgFill />}
          >
            <h4>Work : IT / Non IT : </h4>
            <h3 className="vertical-timeline-element-title">
            Your Role - Company Name 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Chennai, Tamilnadu
            </h4>
            <p className="timeline-sub">
             Roles & Responsiblities
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            style={{marginBottom:"70px"}}
            className="vertical-timeline-element--work"
            date="Month-Year to At Present"
            iconStyle={{ background: "black", color: "#e9d35b" }}
            icon={<BsSuitcaseLgFill />}
          >
            <h3 className="vertical-timeline-element-title">
              Your Role -  Company Name
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Chennai, Tamilnadu
            </h4>
            <p className="timeline-sub">
              Roles and Responsiblities
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;