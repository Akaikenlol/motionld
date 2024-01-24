import Body from "@/components/shared/Body";
import Card from "@/components/shared/Card";

export default function Home() {
	return (
		<>
			<Body>
				<div className="flex-center flex-col mb-10">
					<h1 className="text-2xl font-bold sm:text-sm">
						Next JS With Framer Motion
					</h1>
				</div>
				<Card />
			</Body>
		</>
	);
}
