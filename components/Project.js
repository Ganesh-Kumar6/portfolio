import { Container, useStyles, Text, Button, InlineCode } from "@zeal-ui/core";
import Link from "next/link";

const Project = ({ title, description, source, live, tags }) => {
    const style = useStyles((style, theme) => `
        border-radius:${style.common.borderRadius};
        margin:1rem 0rem;

        .tagsContainer{
            flex-wrap:wrap;
        }

        .tag{
            margin-left:0rem;
            margin-right:0.5rem;
        }

        .btn{
            margin-right:${style.common.margin};
        }
    `);
    return (
        <Container width="100%" height="auto" type="col" customStyles={style}>
            <Text type="subHeading" width="100%" center>{title}</Text>
            {tags &&
                <Container width="100%" type="row" className="tagsContainer">
                    {tags.split(" | ").map((tag) => <InlineCode className="tag" key={tag}>{tag}</InlineCode>)}
                </Container>
            }
            <Text>{description}</Text>
            <Container width="100%" type="row">
                <Link href={source}><a target="_blank"><Button color="orange" className="btn">Source Code</Button></a></Link>
                <Link href={live}><a target="_blank"><Button color="orange" className="btn">Live</Button></a></Link>
            </Container>
        </Container>
    );
};

export default Project;