import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typingSpeed = 100, pause = 2000) {
	const [index, setIndex] = useState(0); // current word index
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const current = words[index]!;
		let timeout: NodeJS.Timeout;

		if (isDeleting) {
			timeout = setTimeout(() => {
				setText((prev) => prev.slice(0, -1));
			}, typingSpeed / 2);
		} else {
			timeout = setTimeout(() => {
				setText((prev) => current.slice(0, prev.length + 1));
			}, typingSpeed);
		}

		// Transition between typing and deleting
		if (!isDeleting && text === current) {
			timeout = setTimeout(() => setIsDeleting(true), pause);
		} else if (isDeleting && text === "") {
			setIsDeleting(false);
			setIndex((prev) => (prev + 1) % words.length);
		}

		return () => clearTimeout(timeout);
	}, [text, isDeleting, index, words, typingSpeed, pause]);

	return text;
}
