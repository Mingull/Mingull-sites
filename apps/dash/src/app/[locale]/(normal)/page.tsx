import { useSession } from "@/lib/auth";

export default async function Home() {
	// const { data: session } = useSession();
	return (
		<section className="py-24">
			<div className="container max-w-2xl md:max-w-4xl xl:max-w-5xl">hello world</div>
		</section>
	);
}
