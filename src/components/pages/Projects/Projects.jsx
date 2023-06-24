import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
export default function Projects() {
  const years = [2023, 2022];
  const [isVisible, setIsVisible] = useState(false);
  const [Year, setYear] = useState("2023");
  let currentyear = 2023;
  const sectionRef = useRef(null);
  const publish = [
    {
      year: "2023",
      publishs: [
        {
          description:
            'Domngam Boje, Mini Loya, Ananta Kumar Atta* "Amidoquinoline-based xylofuranose derivative for selective detection of Cu2+ in aqueous medium", Journal of Photochemistry and Photobiology A: Chemistry, vol. 437, pp. 114468, 2023.',
          studentname: "anumay",
          professorname: "Dr.dilip singh sisodia",
          Technologis: "React php",
          link: "jbjbj",
        },
        {
          description: "jbjbjb",
          studentname: "anumay",
          professorname: "Dr.dilip singh sisodia",
          Technologis: "React php",
          link: "jojoj",
        },
        {
          description: "jjbuj",
          studentname: "anumay",
          professorname: "Dr.dilip singh sisodia",
          Technologis: "React php",
          link: "hihih",
        },
      ],
    },
    {
      year: "2022",
      publishs: [
        {
          description:
            'Domngam Boje, Mini Loya, anuanta Kumar Atta* "Amidoquinoline-based xylofuranose derivative for selective detection of Cu2+ in aqueous medium", Journal of Photochemistry and Photobiology A: Chemistry, vol. 437, pp. 114468, 2023.',
          studentname: "anumay",
          professorname: "Dr.dilip singh sisodia",
          Technologis: "React php",
          link: "jbjbj",
        },
        {
          description: "jbjbjb",
          studentname: "anumay",
          professorname: "Dr.dilip singh sisodia",
          Technologis: "React php",
          link: "jojoj",
        },
        {
          description: "jjbuj",
          studentname: "anumay",
          professorname: "Dr.dilip singh sisodia",
          Technologis: "React php",
          link: "hihih",
        },
      ],
    },
  ];
  const selectHandler = (event) => {
    // if(event.target.value=='--Select Year--')
    // setYear(2023);
    // else
    setYear(event.target.value);
  };
  // //const res = publish.find(({ year }) => year === Year);
  // const result = publish.find(({ year }) => year === Year);
  // console.log(result);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: "url(https://i.postimg.cc/yNBbxWnQ/IMG-2618.jpg)",
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: "60px" }}
            >
              <div className="green-line-text">Projects</div>
            </div>
          </div>
        </div>
        <div className="main-box" ref={sectionRef}>
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>Research Areas</p>
              </div>
              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/Research-Areas">Areas</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/Project">Project</Link>
                </li>
                <li>
                  {" "}
                  <div className="side-border-left" />
                  <Link to="/Publications">Publications</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`project ${
              isVisible ? "animate__animated animate__slideInRight" : ""
            }`}
          >
            <h3 className="he">Projects</h3>
            <div className="maint">
              <div className="selectyr">
                <div className="selectyeasr">
                  <select name="Year" id="sel" onChange={selectHandler}>
                    <option value="2023">--Select Year--</option>
                    {years.map((yr) => (
                      <option value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>
                <div className="syear">
                  <h2>Year: {Year}</h2>
                </div>
              </div>
              <div className="protable">
                {publish.map(({ year, publishs }) =>
                  year === Year ? (
                    <table className="projecttable">
                      <thead>
                        <tr>
                          <th className="wid">S.no.</th>
                          <th className="pwid">Projects</th>
                          <th className="wid2">Students Name</th>
                          <th className="wid2">Professor</th>
                          <th className="wid">Technologies used</th>
                          {/* <th className="wid">Link</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {publishs.map((pub, idx) => (
                          <tr>
                            <td>{idx + 1}</td>
                            <td>{pub.description}</td>
                            <td>{pub.studentname}</td>
                            <td>{pub.professorname}</td>
                            <td>{pub.Technologis}</td>
                            {/* <td>
                            <a href={pub.link}>Link</a>
                          </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
