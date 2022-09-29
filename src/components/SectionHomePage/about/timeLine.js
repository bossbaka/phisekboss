import React from "react";
import { Heading, Tooltip } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const dataTimeLine = [
  {
    cssname: "row-1",
    icons: FaBriefcase,
    iconsdesc: "Experience",
    dateyear: "Aug 2019 - Sep 2021",
    title: "Front-End Engineer",
    desc: `
    Nexpie Co., Ltd`,
  },
  {
    cssname: "row-2",
    icons: FaBriefcase,
    iconsdesc: "Internship",
    dateyear: "Feb 2019 - May 2019",
    title: "Developer",
    desc: ` 
    Internship.
    Happio Co., Ltd`,
  },
  {
    cssname: "row-1",
    icons: FaGraduationCap,
    iconsdesc: "Education",
    dateyear: "2016  - 2019",
    title: "Information Technology",
    desc: ` 
    Bachelor’s Degree,
    Rangsit University.
   `,
  },
  {
    cssname: "row-2",
    icons: FaGraduationCap,
    iconsdesc: "Education",
    dateyear: "2014  - 2015",
    title: "Information Technology",
    desc: ` 
    Diploma of High Vocational Cert. , 
    Saraburi Technical College`,
  },
];

const TimeLine = () => {
  return (
    <>
      <style global jsx>{`
        .wrapper {
          max-width: 1080px;
          margin: 50px auto;
          padding: 0 20px;
          position: relative;
        }
        .wrapper .center-line {
          position: absolute;
          height: 100%;
          width: 4px;
          background: linear-gradient(to right, #7036b3 0%, #cf3860 100%);
          left: 50%;
          top: 20px;
          transform: translateX(-50%);
        }
        .wrapper .row {
          display: flex;
        }
        .wrapper .row-1 {
          justify-content: flex-start;
        }
        .wrapper .row-2 {
          justify-content: flex-end;
        }
        .wrapper .row section {
          background: linear-gradient(to right, #7036b3 0%, #cf3860 100%);
          border-radius: 5px;
          width: calc(50% - 40px);
          padding: 20px;
          position: relative;
          color: rgba(225, 225, 225, 0.87);
        }

        .wrapper .row section::before {
          position: absolute;
          content: "";
          height: 15px;
          width: 15px;
          background: linear-gradient(to right, #7036b3 0%, #cf3860 100%);
          top: 28px;
          z-index: -1;
          transform: rotate(45deg);
        }

        .row-1 section::before {
          right: -7px;
        }
        .row-2 section::before {
          left: -7px;
        }
        .row section .icon {
          position: absolute;
          background: linear-gradient(to right, #7036b3 0%, #cf3860 100%);
          height: 40px;
          width: 40px;
          line-height: 40px;
          border-radius: 50%;
          padding: 7px;
          box-shadow: 0 0 0 2px rgba(225, 225, 225, 0.87);
          z-index: 0;
        }

        .row-1 section .icon {
          top: 15px;
          right: -60px;
        }
        .row-2 section .icon {
          top: 15px;
          left: -60px;
        }

        @media (max-width: 790px) {
          .wrapper .center-line {
            left: 40px;
          }
          .wrapper .row {
            margin: 30px 0 3px 60px;
          }
          .wrapper .row section {
            width: 100%;
          }
          .row-1 section::before {
            left: -7px;
          }
          .row-1 section .icon {
            left: -60px;
          }
        }
        @media (max-width: 440px) {
          .wrapper .center-line,
          .row section::before,
          .row section .icon {
            display: none;
          }
          .wrapper .row {
            margin: 10px 0;
          }
        }
      `}</style>
      <div className="wrapper">
        <div className="center-line" />

        {dataTimeLine.map((item, index) => (
          <div key={index} className={`row ${item.cssname}`}>
            <section>
              <Tooltip
                label={item.iconsdesc}
                placement="top"
                shouldWrapChildren
              >
                <Icon className="icon" as={item.icons} />
              </Tooltip>
              <Heading size="md" lineHeight="10" mb="5px">
                <span>{item.dateyear}</span>
              </Heading>
              <Heading as="span" size="md" fontWeight="normal">
                {item.title}
              </Heading>
              <Heading size="md" fontWeight="normal">
                {item.desc}
              </Heading>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeLine;
