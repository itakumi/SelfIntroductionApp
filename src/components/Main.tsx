import React, { useState } from "react";
import { Profile } from "./Profile/Profile";
import { IntroForm } from "./IntroForm/IntroForm";
import { langdata } from "./langpack";

export const Main = () => {
	const [language, setLanguage] = useState<string>("English");
	console.log("languageは");
	console.log(language);

	// console.log(langdata[language]);
	return (
		<>
			<div className="row justify-content-end">
				<select
					className="m-1 p-0 language"
					onChange={(e) => {
						setLanguage(e.target.value);
					}}
				>
					<option value="English">English</option>
					<option value="Japanese">日本語</option>
					<option value="Chinese">中文</option>
					<option value="Hindi">हिन्दी</option>
					<option value="Russian">Русский язык</option>
					<option value="Tagalog">Wikang Tagalog</option>
				</select>
			</div>
			{/* <div className="row justify-content-end">
				<p
					className="m-1 p-0 language"
					onClick={() => {
						setLanguage("Japanese");
					}}
				>
					日本語
				</p>
				<p
					className="m-1 p-0 language"
					onClick={() => {
						setLanguage("English");
					}}
				>
					English
				</p>
				<p
					className="m-1 p-0 language"
					onClick={() => {
						setLanguage("Chinese");
					}}
				>
					中文
				</p>
				<p
					className="m-1 p-0 language"
					onClick={() => {
						setLanguage("Hindi");
					}}
				>
					हिन्दी
				</p>
			</div> */}
			<div>
				<p>{langdata[language].greeting}</p>
				<div>{langdata[language].inputprofile}</div>
				{/* <div>Please input your profile!!</div> */}
				<IntroForm language={language} />

				<div style={{ borderTop: "3px dotted black" }}></div>
				<div>Profiles</div>
				<Profile />
			</div>
			{/* <div className="mx-auto">
				<RegisterForm />
				<IntroductionPage />
			</div> */}
		</>
	);
};
