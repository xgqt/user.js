#!/bin/sh


# Install user.js


firefox_dir="$HOME/.mozilla/firefox"


for profile in "$firefox_dir"/*
do
	if [ -d "$profile" ]
	then

		echo "Found: $profile"
		echo "Copy user.js there? [y/n]"

		read -r answer

		case $answer
		in
			[Yy]* )

				if [ -f "$profile/user.js" ]
				then
					echo "Diff:"
					diff user.js "$profile/user.js"
				else
					echo "There was no user.js in $profile"
				fi
				
				cp user.js "$profile" && echo "Copied"

				;;
			[Nn]* )

				echo "Skipping: $profile"

				;;
			* )

				echo "I will take that as a 'No'"
				echo "Skipping: $profile"

				;;
		esac
	fi
done
