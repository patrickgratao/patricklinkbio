import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import { ActionButton } from "components/Buttons/ActionButton";
import { SocialButton } from "components/Buttons/SocialButton";

export const JoinPage = () => {
	return (
		<section className="w-full md:w-tabletApp xl:w-mobileApp bg-white h-auto shadow-md mx-auto rounded-3xl relative">
			<div className="h-[140px] bg-[url('/public/cover.jpg')] bg-cover bg-center w-full rounded-t-3xl "></div>
			<div className="w-full px-4 pb-14">
				<section className="mt-[-88px] flex flex-col justify-center items-center gap-4">
					<img
						src="https://avatars.githubusercontent.com/u/7607620?v=4"
						className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
					/>

					<div className="flex flex-col justify-center items-center gap-1">
						<h2 className="text-2xl font-bold text-neutral-800">
							Patrick Gratão
						</h2>
						<span className="text-base text-neutral-600 text-center">
							Os materiais da palestra de React e Tailwind
							encontram-se abaixo.
						</span>

						<section className="mt-4 flex gap-3 ">
							<SocialButton
								className="bg-social-linkedin"
								socialIcon={<FaLinkedinIn />}
								onClick={() =>
									window.open(
										"https://linkedin.com/in/patrickgratao/",
										"_blank",
									)
								}
							/>

							<SocialButton
								className="bg-social-youtube"
								socialIcon={<FaYoutube />}
								onClick={() =>
									window.open(
										"https://www.youtube.com/@patrickgratao",
										"_blank",
									)
								}
							/>

							<SocialButton
								className="bg-social-tiktok"
								socialIcon={<FaGithub />}
								onClick={() =>
									window.open(
										"https://github.com/patrickgratao/",
										"_blank",
									)
								}
							/>
						</section>
					</div>
				</section>

				<section className="mt-7 grid grid-cols-1 gap-3">
					<ActionButton
						emoji="📝"
						onClick={() =>
							window.open(
								"https://github.com/patrickgratao/vite-tailwind-boilerplate",
								"_blank",
							)
						}
					>
						Boilerplate React - Tailwind
					</ActionButton>
					<ActionButton
						emoji={"👨‍💻"}
						onClick={() =>
							window.open(
								"https://github.com/patrickgratao/linkbio",
								"_blank",
							)
						}
					>
						Código do projeto Link in Bio
					</ActionButton>

					<ActionButton
						emoji={"🖥️"}
						onClick={() =>
							window.open(
								"https://linkbio-tau.vercel.app/",
								"_blank",
							)
						}
					>
						Link in Bio - Live Demo
					</ActionButton>

					<ActionButton
						emoji="🎥"
						onClick={() =>
							window.open(
								"https://www.figma.com/deck/WEKmDReG3aYcSa7w6iw5o1/Slides-Palestra-React-%2B-Tailwind?node-id=35-5312&node-type=slide&t=rRAQQeZeIc2XL80i-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
								"_blank",
							)
						}
					>
						Slides da Apresentação
					</ActionButton>
				</section>
			</div>
		</section>
	);
};
