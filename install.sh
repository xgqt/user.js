#!/bin/sh


# Install user.js


firefox_dir="${HOME}/.mozilla/firefox"


for profile in "${firefox_dir}"/*
do
    if [ -d "${profile}" ]
    then

        echo "Found: ${profile}"
        echo "Copy user.js there? [y/n]"

        read -r answer
        case ${answer} in
            [Yy]* )
                if [ -f "${profile}/user.js" ]
                then
                    echo "Backing up existing user.js"
                    mv "${profile}/user.js" "${profile}/user.js.bak"
                fi
                cp user.js "${profile}" && echo "Done: ${profile}"
                ;;
            [Nn]* )
                echo "Skipping: ${profile}"
                ;;
            * )
                echo "I will take that as a 'No'"
                echo "Skipping: ${profile}"
                ;;
        esac
    fi
done
