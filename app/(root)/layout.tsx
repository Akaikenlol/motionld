import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col h-screen">
			<NavBar />
			<main className="flex-1">{children}</main>
			{/* <Footer /> */}
		</div>
	);
}
