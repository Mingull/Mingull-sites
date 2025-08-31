import { ogTheme } from "@/app/og-theme";
import { getProjectBySlug } from "@/data/projects/get-project-by-slug";
import fs from "fs";
import { Locale } from "next-intl";
import { ImageResponse } from "next/og";
import path from "path";

export const alt = "Overview of all blog posts on Mingull";
export const size = { width: 800, height: 450 };
export const contentType = "image/png";

const poppinsPath = path.join(process.cwd(), "public/fonts/Poppins/Poppins-Regular.ttf");
const poppinsFont = fs.readFileSync(poppinsPath);
const robotoMonoPath = path.join(process.cwd(), "public/fonts/Roboto_Mono/static/RobotoMono-Regular.ttf");
const robotoMonoFont = fs.readFileSync(robotoMonoPath);

export default async function Image({ params }: { params: Promise<Readonly<{ locale: Locale; slug: string }>> }) {
	const { locale, slug } = await params;
	const project = await getProjectBySlug(locale, slug);

	if (!project) {
		return new ImageResponse(
			(
				<div
					style={{
						fontSize: 48,
						fontFamily: "Poppins",
						background: `linear-gradient(135deg, ${ogTheme.colors.primary} 0%, ${ogTheme.colors.secondary} 100%)`,
						color: ogTheme.colors.foreground,
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Project not found
				</div>
			),
			{ ...size },
		);
	}
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "2rem",
					background: `linear-gradient(135deg, ${ogTheme.colors.primary} 0%, ${ogTheme.colors.secondary} 100%)`,
					color: ogTheme.colors.foreground,
					position: "relative",
					textAlign: "center",
				}}
			>
				<h1 style={{ fontSize: 48, fontWeight: 800, margin: 0, fontFamily: "Poppins" }}>
					{project.metadata.title}
				</h1>
				<p
					style={{
						fontSize: 30,
						fontWeight: 400,
						letterSpacing: "-0.05em",
						color: ogTheme.colors.mutedForeground,
						marginTop: "1rem",
						fontFamily: "Roboto Mono",
					}}
				>
					{project.metadata.author}
					{project.metadata.publishedAt ?
						`|${new Date(project.metadata.publishedAt).toLocaleDateString(locale)}`
					:	""}
				</p>
				<div style={{ display: "flex" }}>
					{project.metadata.tags?.slice(0, 4).map((tag) => (
						<span
							key={tag}
							style={{
								fontSize: 16,
								fontWeight: 500,
								borderRadius: "0.25rem",
								padding: "0.2rem 0.4rem",
								backgroundColor: ogTheme.colors.muted,
								color: ogTheme.colors.mutedForeground,
								margin: "0 0.5rem",
							}}
						>
							#{tag}
						</span>
					))}
				</div>
				<div
					style={{
						position: "absolute",
						bottom: "1rem",
						right: "1rem",
						fontSize: 30,
						color: ogTheme.colors.primary,
						display: "flex",
						alignItems: "center",
						gap: "0.5rem",
					}}
				>
					<svg
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={36}
						height={36}
						fill="currentColor"
						style={{ display: "flex" }}
						aria-label="Mingull Icon"
					>
						<path
							d="m12 22c-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10 5.5 0 10 4.5 10 10 0 5.5-4.5 10-10 10z"
							fill="none"
							stroke={ogTheme.colors.primary}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
						<path d="m21.3 14.8q0.3 0 0.3 0.8 0 0.4-0.4 1.1-0.4 0.6-1 1.1-0.6 0.6-1.3 0.9-0.8 0.4-1.6 0.4-0.8 0-1.3-0.6-0.4-0.5-0.4-1.2 0-0.6 0.2-1.5 0.2-0.8 0.4-1.7 0.7-2.4 0.7-3.3 0-0.5-0.1-0.7-0.1-0.2-0.4-0.2-0.5 0-1.1 0.6-0.6 0.7-1.2 1.7-1.2 2.3-1.3 4.5 0 0.2 0.1 0.5 0 0.3 0 0.5 0 0.6-0.6 1.1-0.5 0.5-1.2 0.5-0.4 0-0.6-0.4-0.2-0.4-0.2-1 0-0.6 0.2-1.7 0.3-1 0.6-2.1 0.9-3.1 0.9-4.6 0-0.7-0.2-1.2-0.2-0.4-0.7-0.4-1 0-1.9 1.4-1 1.4-1.7 4.3-0.2 0.8-0.3 1.3l-0.1 0.4q0.4 1.6 0.4 2.1 0 1.1-0.8 1.4-0.3 0.2-0.6 0.3-0.3 0.2-0.7 0.2-0.9 0-0.9-1.7 0-1.8 1-6.8 0.3-1.8 0.3-2 0-1.4-0.7-1.4-0.3 0-0.5 0.1-0.2 0.1-0.4 0.3-0.2 0.2-0.4 0.3-0.2 0.2-0.5 0.2-0.3 0-0.3-0.5 0-1 0.9-1.7 0.9-0.6 2.2-0.6 1.6 0 1.9 1.5 0 0.5 0.1 1 1.3-2.5 3.3-2.5 2.3 0 2.6 2.1 0.1 0.6 0.1 1.3v0.1q1.1-1.6 2.7-1.6 2.3 0 2.3 2.8 0 1.1-0.4 2.8-0.3 1.5-0.5 2.2-0.2 0.7-0.2 1.1 0 0.7 0.5 0.7 0.5 0 2.3-1.9 0.3-0.3 0.5-0.3z" />
					</svg>
					Mingull
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: "Poppins",
					data: poppinsFont,
					style: "normal",
					weight: 400,
				},
				{
					name: "Roboto Mono",
					data: robotoMonoFont,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
}
