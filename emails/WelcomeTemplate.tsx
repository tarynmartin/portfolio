import React from 'react';
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

export default function WelcomeEmail() {
  return (
    <Html>
      <Section>
        <Container>
          <Text>Hi there!</Text>
          <Text>Welcome to our app!</Text>
        </Container>
      </Section>
    </Html>
  );
}