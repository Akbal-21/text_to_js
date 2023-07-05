import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [scriptUser, setscriptUser] = useState<string>("");
	const [executeScript, setexecuteScript] = useState<string>("");
	const output = useRef<HTMLDivElement>();

	const handleScript = (e: string) => {
		setscriptUser(e);
	};

	const onExecute = () => {
		setexecuteScript(scriptUser);
	};

	useEffect(() => {
		const head = document.querySelector("#head1");
		// console.log(head);

		const scriptl = document.createElement("script");
		scriptl.append(executeScript);
		head?.appendChild(scriptl);
		return () => {
			head?.removeChild(scriptl);
		};
	}, [executeScript]);

	return (
		<div id="head1">
			<div
				style={{
					alignItems: "center",
				}}
			>
				<h1 style={{ textAlign: "center" }}>Text to Scrip</h1>
			</div>

			<div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						height: "100%",
					}}
				>
					{/* Esto es para anotar el Script  */}
					<div
						style={{
							margin: "0.5rem",
						}}
					>
						<h3 style={{ textAlign: "center" }}>JS</h3>
						<textarea
							className="textarea"
							value={scriptUser}
							style={{
								border: "1px solid",
								padding: "0.5rem",
								height: "189px",
								width: "100%",
								resize: "none",
								borderRadius: "1rem",
							}}
							onChange={(e) => handleScript(e.target.value)}
						/>
					</div>
					{/* Boton parta ejecutar el Script */}
					<div
						style={{
							margin: "0.5rem",
						}}
					>
						<h3 style={{ textAlign: "center" }}>Ejecutar</h3>
						<div
							style={{
								minHeight: "100%",
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<button
								style={{
									background: "#008CBA",
									// border: "none",
									color: "white",
									padding: "15px 32px",
									textDecoration: "none",
									textAlign: "center",
									display: "inline-block",
									fontSize: "16px",
									borderRadius: "8px",
									width: "50%",
								}}
								onClick={() => onExecute()}
							>
								Ejecutar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
