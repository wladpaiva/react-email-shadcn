import { Body, Container, Head, Html, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import config from "../tailwind.config";

import "../global.css";

export const VercelInviteUserEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind config={config}>
        {/* bg-backgorund, border and text-foreground wont be transformed */}
        <Body className="bg-background my-auto mx-auto font-sans px-2">
          <Container className="border border-solid rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Text className="text-foreground">Hi there</Text>

            {/* without css variables */}
            <Text className="text-foreground-replaced">
              You have been invited to join the team <strong>acme</strong> on
              Vercel.
            </Text>

            {/* testing css variable */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                :root {
                  --my-text-color: red;
                }
                `,
              }}
            />
            <Text className="text-[color:var(--my-text-color)]">
              with css variable
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
