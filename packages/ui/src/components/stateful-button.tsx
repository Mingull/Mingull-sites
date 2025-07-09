"use client";

import { cn } from "@mingull/lib";
import { VariantProps } from "class-variance-authority";
import { motion, useAnimate } from "motion/react";
import React from "react";
import { buttonVariants } from "./button.tsx";
import { Slot } from "@radix-ui/react-slot";

export const StatefulButton = ({
	className,
	variant,
	size,
	asChild = false,
	children,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) => {
	const Comp = asChild ? Slot : "button";
	const [scope, animate] = useAnimate();

	const animateLoading = async () => {
		await animate(
			".loader",
			{
				width: "20px",
				scale: 1,
				display: "block",
			},
			{
				duration: 0.2,
			},
		);
	};

	const animateSuccess = async () => {
		await animate(
			".loader",
			{
				width: "0px",
				scale: 0,
				display: "none",
			},
			{
				duration: 0.2,
			},
		);
		await animate(
			".check",
			{
				width: "20px",
				scale: 1,
				display: "block",
			},
			{
				duration: 0.2,
			},
		);

		await animate(
			".check",
			{
				width: "0px",
				scale: 0,
				display: "none",
			},
			{
				delay: 2,
				duration: 0.2,
			},
		);
	};

	const animateError = async () => {
		await animate(
			".loader",
			{
				width: "0px",
				scale: 0,
				display: "none",
			},
			{
				duration: 0.2,
			},
		);
		await animate(
			".cross",
			{
				width: "20px",
				scale: 1,
				display: "block",
			},
			{
				duration: 0.2,
			},
		);
		await animate(
			".cross",
			{
				width: "0px",
				scale: 0,
				display: "none",
			},
			{
				delay: 2,
				duration: 0.2,
			},
		);
	};

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		try {
			await animateLoading();
			await props.onClick?.(event);
			await animateSuccess();
		} catch (error) {
			await animateError();
		}
	};

	const { onClick, onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...buttonProps } = props;

	return (
		<motion.button
			layout
			layoutId="button"
			ref={scope}
			className={cn(buttonVariants({ variant, size, className }))}
			{...buttonProps}
			onClick={handleClick}
		>
			<motion.div layout className="flex items-center gap-2">
				<Loader />
				<CheckIcon />
				<CrossIcon />
				<motion.span layout>{children}</motion.span>
			</motion.div>
		</motion.button>
	);
};

const Loader = () => {
	return (
		<motion.svg
			animate={{
				rotate: [0, 360],
			}}
			initial={{
				scale: 0,
				width: 0,
				display: "none",
			}}
			style={{
				scale: 0.5,
				display: "none",
			}}
			transition={{
				duration: 0.3,
				repeat: Infinity,
				ease: "linear",
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="loader text-white"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 3a9 9 0 1 0 9 9" />
		</motion.svg>
	);
};

const CheckIcon = () => {
	return (
		<motion.svg
			initial={{
				scale: 0,
				width: 0,
				display: "none",
			}}
			style={{
				scale: 0.5,
				display: "none",
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="check text-white"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M9 12l2 2l4 -4" />
		</motion.svg>
	);
};

const CrossIcon = () => {
	return (
		<motion.svg
			initial={{
				scale: 0,
				width: 0,
				display: "none",
			}}
			style={{
				scale: 0.5,
				display: "none",
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="cross text-white"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="m15 9-6 6" />
			<path d="m9 9 6 6" />
		</motion.svg>
	);
};
