import * as React from "react";
import { Body, Button, Container, Head, Heading, Html, Link, Preview, Section, Text, Tailwind } from "@react-email/components";

interface ForgotPasswordEmailProps {
	username: string;
	url: string;
	email: string;
}

export const ForgotPasswordEmail = ({ username, url, email }: ForgotPasswordEmailProps) => {
	return (
		<Html dir="ltr">
			<Tailwind
				config={{
					theme: {
						extend: {
							colors: {
								background: "#fefefe",
								foreground: "#0e0e16",
								primary: "#6643f3",
								muted: "#f4f4f7",
								"muted-foreground": "#55556f",
							},
						},
					},
				}}
			>
				<Head />
				<Preview>Reset your password - Action required</Preview>
				<Body className="bg-muted py-[40px] font-sans">
					<Container className="bg-background mx-auto max-w-[600px] rounded-[8px] p-[40px] shadow-sm">
						{/* Header */}
						<Section className="mb-[32px] text-center">
							<Heading className="text-foreground m-0 text-[28px] font-bold">Reset Your Password</Heading>
							<Text className="text-muted-foreground m-0 text-[16px]">We received a request to reset your password</Text>
						</Section>

						{/* Main Content */}
						<Section className="mb-[32px]">
							<Text className="text-muted-foreground m-0 mb-[16px] text-[16px] leading-[24px]">Hello, {username}</Text>
							<Text className="text-muted-foreground m-0 mb-[16px] text-[16px] leading-[24px]">
								We received a password reset request for your account associated with <strong>{email}</strong>.
							</Text>
							<Text className="text-muted-foreground m-0 mb-[24px] text-[16px] leading-[24px]">
								Click the button below to create a new password. This link will expire in 24 hours for security reasons.
							</Text>
						</Section>

						{/* Reset Button */}
						<Section className="mb-[32px] text-center">
							<Button href={url} className="bg-primary box-border inline-block rounded-[8px] px-[32px] py-[16px] text-[16px] font-semibold text-white no-underline">
								Reset Password
							</Button>
						</Section>

						{/* Alternative Link */}
						<Section className="mb-[32px]">
							<Text className="text-muted-foreground m-0 mb-[8px] text-[14px] leading-[20px]">If the button doesn&apos;t work, copy and paste this link into your browser:</Text>
							<Link href={url} className="text-primary break-all text-[14px]">
								{url}
							</Link>
						</Section>

						{/* Security Notice */}
						<Section className="bg-muted mb-[32px] rounded-[8px] p-[20px]">
							<Text className="text-foreground m-0 mb-[8px] text-[14px] font-semibold leading-[20px]">Security Notice:</Text>
							<Text className="text-muted-foreground m-0 mb-[8px] text-[14px] leading-[20px]">• If you didn&apos;t request this password reset, please ignore this email</Text>
							<Text className="text-muted-foreground m-0 mb-[8px] text-[14px] leading-[20px]">• This link will expire in 24 hours</Text>
							<Text className="text-muted-foreground m-0 text-[14px] leading-[20px]">• For security, never share this link with anyone</Text>
						</Section>

						{/* Help Section */}
						<Section className="mb-[32px]">
							<Text className="text-muted-foreground m-0 text-[14px] leading-[20px]">
								Need help? Contact our support team at{" "}
								<Link href="mailto:support@company.com" className="text-primary">
									support@company.com
								</Link>
							</Text>
						</Section>

						{/* Footer */}
						<Section className="border-border border-t pt-[24px]">
							<Text className="text-muted-foreground m-0 mb-[8px] text-[12px] leading-[16px]">This email was sent to {email}</Text>
							<Text className="text-muted-foreground m-0 mb-[8px] text-[12px] leading-[16px]">Company Name, 123 Business Street, City, State 12345</Text>
							<Text className="text-muted-foreground m-0 text-[12px] leading-[16px]">
								© 2025 Company Name. All rights reserved.{" "}
								<Link href="#" className="text-muted-foreground underline">
									Unsubscribe
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
export default ForgotPasswordEmail;
