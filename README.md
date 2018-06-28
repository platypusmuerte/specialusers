# specialusers
Restrict Firebot button presses to a specific list of users.

Add this file to the script directory in Firebot. Custom scripts must be enabled.

I use this script to allow only my sponsors from Patreon to access a scene with buttons for them only.

This assumes you have a scene in Firebot for special users already created. For the Setup below, we assume your scene is named **specialscene**.

# Setup
1. Add this file to the script directory in Firebot. Custom scripts must be enabled.
2. In Firebot go to Viewer Groups, and create a New Group. You can name it what ever is appropriate, but for this example, we will call it **specialusers**. Do not add users to this group here, at this time. The script and Firebot manages this.
3. Go to Buttons, and click the cog/gear at the top of the screen.
   - Select the specialscene and in the top right of its little box, click edit.
   - Select our new group "specialusers" as default.
4. Now choose a button in your main scene, and add this script to it as a Custom Script effect.
   - In the 1st field, enter your special users, using a pipe(|) like so: **platypusmuerte|firebottle|lagby**
   - In the 2nd field, type your new group **specialusers**
5. Restart Firebot, and now, to test the button by having someone who is in that list, click the button in the interactive area below your stream. They should be moved to the new scene. (remember to add a back button so people can leave this new scene too). Also test someone not in the list, and make sure they aren't able to see the new scene.
