import { Layout, useStyles, Container, Text, List, ListItem, } from '@zeal-ui/core';
import Link from "next/link";

const Home = () => {
  const style = useStyles((style, theme) => `
    @media(min-width:768px){
      .homeContainer{
        width:50%;
      }
    }
  `);
  return (
    <Layout title="Home" disableSidebar>
      <Container width="100%" height="100%" type="col" rowCenter customStyles={style}>
        <Container width="100%" type="col" className="homeContainer">
          <Text type="mainHeading" width="100%" center>💻 Home</Text>
          <Text type="subHeading">😎 About</Text>
          <Text>Hello there, I'm Ganesh Kumar currently pursing 3rd year Computer Science Engineering in Anna University, Chennai.</Text>
          <Text>I'm a full stack developer who loves to build awesome apps/tools. You can check out my projects <Link href="/projects">here</Link>.
          </Text>
          <Text type="subHeading">🔧 Skills</Text>
          <List type="ul">
            <ListItem>
              <strong>Development</strong> - HTML | CSS | JavaScript | React JS | Node JS
            </ListItem>
            <ListItem>
              <strong>Computer Science</strong> - Data Structures | Algorithms | Object Oriented Programming | Databases
            </ListItem>
          </List>
          <Text type="subHeading">🏫 Education</Text>
          <List type="ul">
            <ListItem>
              <Text><strong>University</strong> - Anna University</Text>
              <Text><strong>College</strong> - Sri Venkateswara College of Engineering</Text>
              <Text><strong>Branch</strong> - Computer Science</Text>
              <Text><strong>Year</strong> - 2019 to 2023</Text>
              <Text><strong>Grade</strong> - 9.2 CGPA</Text>
            </ListItem>
            <ListItem>
              <Text><strong>School</strong> - Vels Vidhyashram [Higher Secondary Education]</Text>
              <Text><strong>Year</strong> - 2018 to 2019 </Text>
              <Text><strong>Grade</strong> - 95%</Text>
            </ListItem>
            <ListItem>
              <Text><strong>School</strong> - Vels Vidhyashram [Secondary Education]</Text>
              <Text><strong>Year</strong> - 2016 to 2017 </Text>
              <Text><strong>Grade</strong> - 10 CGPA</Text>
            </ListItem>
          </List>
        </Container>
      </Container>
    </Layout>
  );
};

export default Home;
