import {
  Heading,
  Html,
  Body,
  Container,
  Hr,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";
import { ContactFormType } from "../components/Contact/interfaces";
import { CSSProperties, ReactElement } from "react";

export function ContactEmail(props: ContactFormType): ReactElement {
  const { name, email, message } = props;

  return (
    <Html>
      <Body>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission!</Heading>
          <Hr style={hr} />
          <Section>
            <Text style={field}>
              <span style={fieldName}>Name: </span>
              {name}
            </Text>
            <Text style={field}>
              <span style={fieldName}>Email: </span>
              {email || "N/A"}
            </Text>
            <Text style={field}>
              <span style={fieldName}>Message: </span>
              <br />
              {message}
            </Text>
          </Section>
          <Hr style={hr} />
          <Link href="https://www.maditabon.dev">
            <Img
              src="https://imgur.com/a/66znC9m"
              alt="Madi Tabon"
              width="250"
              style={logo}
            />
          </Link>
        </Container>
      </Body>
    </Html>
  );
}

const container: CSSProperties = {
  margin: "0 auto",
  padding: "20px 1rem 48px",
  fontFamily: "DM Sans, Arial, sans-serif",
};

const heading: CSSProperties = {
  textAlign: "center",
  color: "#141e49",
};

const hr: CSSProperties = {
  borderColor: "#d5af34",
};

const field: CSSProperties = {
  fontSize: "16px",
  marginBottom: "16px",
};

const fieldName: CSSProperties = {
  fontWeight: "bold",
  marginRight: "1rem",
  color: "#141e49",
};

const logo: CSSProperties = {
  margin: "2rem auto",
};

const paragraph: CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
};