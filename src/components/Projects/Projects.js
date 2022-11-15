import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import projImg1 from '../../assets/img/projcet/1.png';
import projImg2 from '../../assets/img/projcet/2.png';
import projImg3 from '../../assets/img/projcet/3.png';
import projImg4 from '../../assets/img/projcet/4.png';
import projImg5 from '../../assets/img/projcet/5.png';
import projImg6 from '../../assets/img/projcet/6.png';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './style.css';
export const Projects = () => {
  const projects = [
    {
      title: 'Html Css Js Template',
      description: 'https://anas110440.github.io/Html-Css-Js-Template/',
      imgUrl: projImg1,
    },
    {
      title: 'Kazoz',
      description: 'https://anas110440.github.io/Kazoz/',
      imgUrl: projImg4,
    },
    {
      title: 'React Tempelet',
      description: 'https://anas110440.github.io/React-Tempelet-AnasCodex/',
      imgUrl: projImg6,
    },
    {
      title: 'Login Page',
      description: 'Educational website',
      imgUrl: projImg5,
    },
    {
      title: 'Admin Dashboard',
      description: 'Educational website',
      imgUrl: projImg2,
    },
    {
      title: 'Student Dashboard',
      description: 'Educational website',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
