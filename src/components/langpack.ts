export interface LanguageData {
	greeting: string;
	inputprofile: string;
	name_nickname: string;
	name_rule_error: string;
	team: string;
	team_rule_error: string;
	others: string;
	others_rule_error: string;
	your_image: string;
	submit: string;
	submit_error: string;
	select_files: string;
}
export const langdata: Record<string, LanguageData> = {
	English: {
		greeting: "Hello!! QA members!!",
		inputprofile: "Please input your profile!!",
		name_nickname: "Name / Nickname",
		name_rule_error: "Invalid name format",
		team: "Team",
		team_rule_error: "Invalid Team format",
		others: "Others(hobby, greetings, etc...)",
		others_rule_error: "Invalid Others format",
		your_image: "Your image",
		submit: "Submit",
		submit_error: "Please input something in Name, Team, Others, image",
		select_files: "Select file",
	},
	Japanese: {
		greeting: "ようこそ！ QAの皆さん！",
		inputprofile: "あなたのプロファイルを入力してください！",
		name_nickname: "名前 / ニックネーム",
		name_rule_error: "名前の形式が正しくありません",
		team: "チーム",
		team_rule_error: "チームの形式が正しくありません",
		others: "その他(趣味、挨拶等)",
		others_rule_error: "その他の形式が正しくありません",
		your_image: "画像ファイル",
		submit: "送信",
		submit_error: "Name, Team, Others, imageには何か入力してください",
		select_files: "ファイルを選択",
	},
	Chinese: {
		greeting: "欢迎！QA团队成员！",
		inputprofile: "请输入您的个人资料！",
		name_nickname: "姓名 / 昵称",
		name_rule_error: "无效的姓名格式",
		team: "团队",
		team_rule_error: "无效的团队格式",
		others: "其他(爱好、问候等)",
		others_rule_error: "无效的其他格式",
		your_image: "您的图片",
		submit: "提交",
		submit_error: "Name, Team, Others, image请输入信息。",
		select_files: "选择文件",
	},
	Hindi: {
		greeting: "नमस्ते!! क्यूए टीम के सदस्यों!!",
		inputprofile: "कृपया अपनी प्रोफ़ाइल दर्ज करें!!",
		name_nickname: "नाम / उपनाम",
		name_rule_error: "अमान्य नाम प्रारूप",
		team: "टीम",
		team_rule_error: "अमान्य टीम प्रारूप",
		others: "अन्य (रुचि, अभिवादन, आदि)",
		others_rule_error: "अमान्य अन्य प्रारूप",
		your_image: "आपकी छवि",
		submit: "प्रस्तुत करें",
		submit_error: "Name, Team, Others, image कुछ भी दर्ज करें।",
		select_files: "फ़ाइल का चयन करें ",
	},
	Russian: {
		greeting: "Привет!! Участники QA!!",
		inputprofile: "Пожалуйста, введите свой профиль!!",
		name_nickname: "Имя / Псевдоним",
		name_rule_error: "Неверный формат имени",
		team: "Команда",
		team_rule_error: "Неверный формат команды",
		others: "Другое (хобби, приветствия и т. д.)",
		others_rule_error: "Неверный формат других данных",
		your_image: "Ваше изображение",
		submit: "Отправить",
		submit_error:
			"Пожалуйста, введите информацию в поля Имя, Команда, Другое, изображение",
		select_files: "Выбрать файл",
	},
	Tagalog: {
		greeting: "Kamusta!! Mga miyembro ng QA!!",
		inputprofile: "Mangyaring maglagay ng inyong profile!!",
		name_nickname: "Pangalan / Palayaw",
		name_rule_error: "Hindi wastong format ng pangalan",
		team: "Samahan",
		team_rule_error: "Hindi wastong format ng samahan",
		others: "Iba pa (hobby, pagbati, at iba pa)",
		others_rule_error: "Hindi wastong format ng iba pa",
		your_image: "Inyong larawan",
		submit: "Ipasa",
		submit_error:
			"Mangyaring maglagay ng impormasyon sa mga larangan ng Pangalan, Samahan, Iba pa, at larawan",
		select_files: "Pumili ng mga file",
	},
};
