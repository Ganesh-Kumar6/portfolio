import { Layout, Container, useStyles, Text } from "@zeal-ui/core";

const Resume = () => {
    const style = useStyles((style, theme) => `
        .resumeContainer{
            width:100%;
            height:70rem;
        }
        .resume{
            margin-top:2rem;
            width:100%;
            height:100%;
        }
        @media(min-width:768px){
            .resumeContainer{
                width:45rem;
            }
        }
    `);
    return (
        <Layout title="Resume" disableSidebar>
            <Container type="col" width="100%" height="100%" rowCenter customStyles={style}>
                <Container type="col" rowCenter className="resumeContainer">
                    <Text type="mainHeading" width="100%" center>📄 Resume</Text>
                    <object type="application/pdf" data="/Ganesh-Kumar-Resume.pdf" className="resume" />
                </Container>
            </Container>
        </Layout>
    );
};

export default Resume;