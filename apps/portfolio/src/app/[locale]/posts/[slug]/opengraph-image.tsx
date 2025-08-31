import { ogTheme } from "@/app/og-theme";
import { getPostBySlug } from "@/data/posts/get-post-by-slug";
import fs from "fs";
import { Locale } from "next-intl";
import { ImageResponse } from "next/og";
import path from "path";

export const alt = "OpenGraph image for the post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fonts
const poppinsPath = path.join(process.cwd(), "public/fonts/Poppins/Poppins-Regular.ttf");
const poppinsFont = fs.readFileSync(poppinsPath);
const robotoMonoPath = path.join(process.cwd(), "public/fonts/Roboto_Mono/static/RobotoMono-Regular.ttf");
const robotoMonoFont = fs.readFileSync(robotoMonoPath);

export default async function Image({ params }: { params: Promise<Readonly<{ locale: Locale; slug: string }>> }) {
	const { locale, slug } = await params;
	const post = await getPostBySlug(locale, slug);

	if (!post) {
		return new ImageResponse(
			(
				<div
					style={{
						fontSize: 48,
						fontFamily: "Poppins",
						backgroundColor: ogTheme.colors.background,
						color: ogTheme.colors.foreground,
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Post not found
				</div>
			),
			{ ...size },
		);
	}

	const { title = "Untitled Post", author = "Mingull", publishedAt, updatedAt, image } = post.metadata;
	const date = publishedAt ?? updatedAt;

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "1rem",
					color: ogTheme.colors.foreground,
					fontFamily: "Poppins",
					backgroundColor: ogTheme.colors.background,
					backgroundImage: image ? `url(${image})` : undefined,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					position: "relative",
				}}
			>
				{/* Semi-transparent overlay */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							"linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 15%, rgba(0,0,0,0) 30%,rgba(0,0,0,0) 70%, rgba(0, 0, 0, 0.4) 85%)",
					}}
				/>

				{/* Post title */}
				<div style={{ position: "relative", zIndex: 1, display: "flex" }}>
					<div
						style={{
							fontSize: 64,
							fontWeight: 800,
							lineHeight: 1.2,
							maxWidth: "90%",
						}}
					>
						{title}
					</div>
				</div>

				{/* Metadata row */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						fontSize: 28,
						position: "relative",
						zIndex: 1,
						width: "100%",
					}}
				>
					{/* Author & date */}
					<div
						style={{
							fontWeight: 500,
							fontFamily: "Roboto Mono",
							letterSpacing: "-0.05em",
							display: "flex",
							gap: "0.5rem",
							color: ogTheme.colors.mutedForeground,
						}}
					>
						{author}
						{date && ` · ${new Date(date).toLocaleDateString(locale)}`}
					</div>

					{/* Branding */}
					<div
						style={{
							fontSize: 36,
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
							width={48}
							height={48}
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
