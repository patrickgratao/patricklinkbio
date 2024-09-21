type AppLayout = {
	children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayout) => {
	return (
		<main className="appContainer">
			{children}
			<footer>
				Criado com 💗 por
				<a
					href="https://www.linkedin.com/in/patrickgratao/"
					target="_blank"
					className="link"
				>
					Patrick Gratão.
				</a>
			</footer>
		</main>
	);
};
