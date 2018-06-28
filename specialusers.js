exports.getScriptManifest = () => {
	return {
		name: "SpecialUsers",
		description: "Restricts button click to only users in the list",
		version: "0.0.1",
		author: "PlatypusMuerte",
		website: "http://platypusmuerte.com"
	};
};

function getDefaultParameters() {
	return new Promise((resolve, reject) => {
		resolve({
			userList: {
				type: "string",
				description: "Enter Mixer usernames (lowercase), separated by pipes(|) ex: platypusmuerte|firebottle|lagby"
			},
			groupName: {
				type: "string",
				description: "What group should the user be moved to?"
			}
		});
	});
}
exports.getDefaultParameters = getDefaultParameters;

function run(runRequest) {
  let userName = runRequest.user.name.toLowerCase();
  let userList = runRequest.parameters.userList.split('|');
  let groupName = runRequest.parameters.groupName;
  
	return new Promise((resolve, reject) => {
		let response;
		
		userList = userList.map((user) => user.toLowerCase());
		
		if(userList.includes(userName)) {
			response = {
				success: true,
				effects:[
					{
						type: EffectType.CHANGE_GROUP,
						group: groupName
					}
				]                  
			}
		} else {
			response = {
				success: true
			}
		}
		
		resolve(response);
	});
}

exports.run = run;