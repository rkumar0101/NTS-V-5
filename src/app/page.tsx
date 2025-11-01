import { Container, Section, Heading } from "@/components/ui/primitives";

export const metadata = {
  title: "Narayani Thoughts",
  description: "Step-by-step build with Panda CSS.",
};

export default function Page() {
  return (
    <Container>
      <Section>
        <Heading>Narayani Thoughts</Heading>
        <p style={{ color: "var(--colors-appMuted, #a3a3a3)" }}>
          This layout now uses Panda tokens via primitives.
        </p>

        <ol>
          <li>✅ Panda CSS is wired.</li>
          <li>✅ Design tokens active.</li>
          <li>Next step: add the <strong>Header component</strong> (hamburger, logo, theme, profile).</li>
        </ol>
      </Section>
    </Container>
  );
}
