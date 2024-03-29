import "../../style/WorkingStyle.css";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileCircleCheck,
  faLocation,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCalendar,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";


import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export function Trabajos() {
  const [jobs, setJobs] = useState
  ([
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/40023/expertech.png",
      name: "Analista de infraestructura IT",
      skills: [
        {
          name: "Azure Cloud",
          icon: "devicon-azure-plain colored",
        },
        {
          name: "Sophos",
          icon: "",
        },
        {
          name: "Acronis",
          icon: "",
        },
      ],
      company: "EXPERTECH",
      modality: "Medellin",
      pay: "4M - 5M COP",
      amount: 1,
      date: "1 day ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Coordinador de Tecnología Educativa",
      skills: [
        {
          name: "Power Bi",
          icon: "",
        },
        {
          name: "Power Apps",
          icon: "",
        },
        {
          name: "Microsoft 365",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto - en cualquier lugar",
      pay: "Confidencial",
      amount: 1,
      date: "about 9 hours ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Profesor de Portugués",
      skills: [
        {
          name: "Educación Virtual",
          icon: "",
        },
        {
          name: "Microsoft Teams",
          icon: "",
        },
        {
          name: "Portugués",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto - en Brazil",
      pay: "Confidencial",
      amount: 1,
      date: "1 day ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Profesor de Tecnología",
      skills: [
        {
          name: "Microsoft 365",
          icon: "",
        },
        {
          name: "English C1",
          icon: "",
        },
        {
          name: "pedagogical methodology",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto - en cualquier lugar",
      pay: "Confidencial",
      amount: 1,
      date: "1 day ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Líder de Tecnología",
      skills: [
        {
          name: "Aws",
          icon: "devicon-amazonwebservices-plain-wordmark",
        },
        {
          name: "Software Development",
          icon: "",
        },
        {
          name: "Project Leadership",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto",
      pay: "Confidencial",
      amount: 1,
      date: "1 day ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Apoyo Técnico",
      skills: [
        {
          name: "Customer Support",
          icon: "",
        },
        {
          name: "Power Apps",
          icon: "",
        },
        {
          name: "Microsoft For Education",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto en Brazil",
      pay: "Confidencial",
      amount: 1,
      date: "1 day ago",
      benefits: [{}],
    },
    {
      logo: "https://peaku.co/img/company.svg",
      name: "Practicante Comunicaciones",
      skills: [
        {
          name: "Attitude To Service",
          icon: "",
        },
      ],
      company: "Curryt",
      modality: "Bogotá",
      pay: "$ 1.2M - 1.3M COP",
      amount: 1,
      date: "1 day ago",
      benefits: [{}],
    },
    {
      logo: "https://peaku.co/img/company.svg",
      name: "Auxiliar Contable",
      skills: [
        {
          name: "Compliance With Indicators",
          icon: "",
        },
        {
          name: "Organizational Capacity",
          icon: "",
        },
        {
          name: "Agile Work.",
          icon: "",
        },
      ],
      company: "Confidencial",
      modality: "Bucaramanga",
      pay: "Confidencial",
      amount: 1,
      date: "2 day ago",
      benefits: [
        {
          name: "Certificaciones",
          icon: faFileCircleCheck,
        },
        {
          name: "Fiesta de fin de año",
          icon: faFaceSmileBeam,
        },
        {
          name: "Capacitaciones",
          icon: faFileCircleCheck,
        },
      ],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Profesor de Matemáticas",
      skills: [
        {
          name: "Microsoft 365",
          icon: "",
        },
        {
          name: "English C1",
          icon: "",
        },
        {
          name: "Pedagogical Methodology",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto - Cualquier lugar",
      pay: "Confidencial",
      amount: 1,
      date: "7 days ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80639/Invoway.png",
      name: "Desarrollador Senior Java EE",
      skills: [
        {
          name: "Spring",
          icon: "devicon-spring-original",
        },
        {
          name: "Java Usa",
          icon: "devicon-java-plain",
        },
        {
          name: "Agile Scrum Methodology",
          icon: "",
        },
      ],
      company: "INVOWAY",
      modality: "Remoto en Colombia",
      pay: "$ 8M - 10M COP",
      amount: 5,
      date: "2 days ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Coordinadora de gestión humana",
      skills: [
        {
          name: "Microsoft Office",
          icon: "",
        },
        {
          name: "Assertive Communication",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto en",
      pay: "Confidencial",
      amount: 1,
      date: "7 days ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Asistente de Recursos Humanos",
      skills: [
        {
          name: "Microsoft Office",
          icon: "",
        },
        {
          name: "Assertive Communication",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto en",
      pay: "Confidencial",
      amount: 1,
      date: "7 days ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
      name: "Consejero comercial",
      skills: [
        {
          name: "Microsoft Office",
          icon: "",
        },
        {
          name: "Negotiate",
          icon: "",
        },
        {
          name: "B2c",
          icon: "",
        },
      ],
      company: "Genuine Digital School",
      modality: "Remoto en Colombia",
      pay: "Confidencial",
      amount: 1,
      date: "7 days ago",
      benefits: [{}],
    },
    {
      logo: "https://peaku.co/img/company.svg",
      name: "Key account manager",
      skills: [
        {
          name: "Account Management",
          icon: "",
        },
      ],
      company: "Confidencial",
      modality: "Bogotá",
      pay: "$ 4M - 4.5M COP",
      amount: 1,
      date: "8 days ago",
      benefits: [{}],
    },
    {
      logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/48484/skalo.jpg",
      name: "Analista de Datos",
      skills: [
        {
          name: "Python",
          icon: "devicon-python-plain",
        },
        {
          name: "Power Bi",
          icon: "",
        },
        {
          name: "Analysis of Data",
          icon: "",
        },
      ],
      company: "Skalo",
      modality: "Remoto en Colombia",
      pay: "$ 2.5M - 4.5M COP",
      amount: 1,
      date: "6 days ago",
      benefits: [
        {
          name: "Trabajo remoto",
          icon: faLocation,
        },
        {
          name: "Ambiente de trabajo amigable",
          icon: faUserGroup,
        },
        {
          name: "Flexibilidad de horarios",
          icon: faCalendar,
        },
      ],
    },
  ]);
  
  return (
    <div className="cuerpoworking">
      <section className="cards">
        {jobs.map((item, index) => (
          <div className="card">
            <div className="cardHeader">
              <img src={item.logo} alt="Logo Empresa" />
            </div>

            <div className="cardBody">
              <div className="cardBody-top">
                <h2>{item.name}</h2>
                <div className="cardBody-top-technologies">
                  {item.skills.map((item2, index) => (
                    <div className="technologie">
                      <span>
                        {item2.icon ? <i className={item2.icon}></i> : ""}
                        {item2.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cardBody-buttom">
                <div>
                  <svg
                    data-v-378c8849=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="building"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-building b-icon bi"
                  >
                    <g data-v-378c8849="">
                      <path
                        fill-rule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      ></path>
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
                    </g>
                  </svg>

                  <span>{item.company}</span>
                </div>

                <div>
                  <svg
                    data-v-378c8849=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="geo alt"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-geo-alt b-icon bi"
                  >
                    <g data-v-378c8849="">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </g>
                  </svg>
                  <span>{item.modality}</span>
                </div>

                <div>
                  <svg
                    data-v-378c8849=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="cash"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-cash b-icon bi"
                  >
                    <g data-v-378c8849="">
                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"></path>
                    </g>
                  </svg>
                  <span>{item.pay}</span>
                </div>

                <div>
                  <svg
                    data-v-378c8849=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="people"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-people b-icon bi"
                  >
                    <g data-v-378c8849="">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                    </g>
                  </svg>
                  <span>
                    {item.amount} Vacante{item.amount > 1 ? "s" : ""}
                  </span>
                </div>

                <div>
                  <svg
                    data-v-378c8849=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="calendar3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-calendar3 b-icon bi"
                  >
                    <g data-v-378c8849="">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"></path>
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                    </g>
                  </svg>
                  <span>{item.date}</span>
                </div>

                <div className="benefits">
                  {item.benefits.map((item3, index) => (
                    <>
                      {item3.icon && item3.name ? (
                        <span>
                          <FontAwesomeIcon
                            className="icon"
                            icon={item3.icon}
                          />
                        </span>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="footer">
      <div className='FooterPrincipal'>
            <div className="footerTitle">
                <h2>¡Descubre la nueva forma de encontrar empleo!</h2>
            </div>

            <div className="footerMain">
                <ul>
                    <h4>Top de empleos</h4>
                    <li><a href="#">Bootcamp Desarrolladores AI Fullstack</a></li>
                    <li><a href="#">Cohorte 12</a></li>
                    <li><a href="#">Analista de datos</a></li>
                    <li><a href="#">Auxiliar de enfermería</a></li>
                    <li><a href="#">Líder administrativo</a></li>
                    <li><a href="#">Técnico en Soporte Nivel 1</a></li>
                </ul>  


                <ul>
                    <h4>Top categorías de empleo</h4>
                    <li><a href="#">Frontend Dev</a></li>
                    <li><a href="#">Fullstack</a></li>
                    <li><a href="#">Backend Dev</a></li>
                    <li><a href="#">Mobile Dev</a></li>
                    <li><a href="#">Gerente de reclutamiento</a></li>
                </ul>   


                <ul>
                    <h4>Empresas</h4>
                    <li><a href="#">Publicar empleo</a></li>
                    <li><a href="#">Precios</a></li>
                    <li><a href="#">Nuestro proceso</a></li>
                    <li><a href="#">Comercial</a></li>
                </ul> 

                <ul>
                    <h4>Legal</h4>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Política privacidad</a></li>
                </ul> 
            </div>

            <div className="footerBottom">
                <div className="footerBottomRedes">
                  <span>
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </span>
                  <span>
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                  </span>
                </div>
                <div className="footerBottomCopy">
                    <p> © 2024 PeakU Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
