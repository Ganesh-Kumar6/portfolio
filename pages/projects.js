import { Layout, useStyles, Container, Text, } from '@zeal-ui/core';
import Project from "../components/Project";
import projectItems from "../utils/ProjectItems";

const Projects = () => {
  const style = useStyles((style, theme) => `
    @media(min-width:768px){
      .projectsContainer{
        width:50%;
      }
    }
  `);
  return (
    <Layout title="Projects" disableSidebar>
      <Container width="100%" height="100%" type="col" rowCenter customStyles={style}>
        <Container width="100%" type="col" className="projectsContainer">
          <Text type="mainHeading">🚀 Projects</Text>
          {projectItems.map(({ title, description, source, live, tags }) =>
            <Project title={title} description={description} source={source} live={live} tags={tags} key={title} />
          )}
        </Container>
      </Container>
    </Layout>
  );
};

export default Projects;