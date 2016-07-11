# FChatBot-ExamplePlugin

## How to start?

0. [Install Node.JS](https://nodejs.org/en/)
1. Pull the project from github, or just [download](https://github.com/AelithBlanchett/FChatBot-ExamplePlugin/archive/master.zip) then extract the archive.
2. Open a console (Command invite on windows, or terminal on linux), then go to the directory where you extracted the files. (cd "C:\the\directory")
3. Type 'npm install'
4. Edit the app.js file, especially the options variable. Fill in your credentials, the character your bot show as, and the room ID where the bot will go first.
If you don't know how to get that room ID I'm talking about, just open F-chat, go into the room you want to bot in, type /openroom to open it, then /code to get the code.
The usual format for the code is like this: 'ADH-xxxxxxxxxxxxxxxxxxxx'
4. Type 'node app.js', and watch the bot appear in the room!
5. By default, there aren't any plugins loaded. The !help command will show you which commands are available.
!availableplugins will show the list of plugins in the /plugins folder.
!loadplugin pluginname will load the plugin /plugins/pluginname.js
Once the bot loads a plugin or joins a room, the bot will save and remember to connect to these rooms, and automatically load these plugins.
6. Type '!loadplugin my_plugin' in the chat, and it will tell you which commands it has loaded.
7. You should see that the !guide command has been added, so type it into the chat, and read its output.
8. Once you have read it, you're ready to go!
