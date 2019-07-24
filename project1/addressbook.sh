#!/bin/bash
#Kathy LeHew
#6-19-2019
#CMSC433

help ()
{
    echo "Here is the list of commands:"
    echo "Add: This command takes three arguments, first name, last name, and 
email address"
    echo "Remove: This command takes two arguments, first name and last name.
If the user responds 'y' to remove the selected person, the person will be
removed from the address book"
    echo "Search: This command takes one argument and has optional tags --whole-name
and --email depending on what the user would like to search by. Both tags
can be used at once. The default search method is by last name"
}

add ()
{   
    if [ ! -d ~/.book/ ]; then
	mkdir ~/.book/;
    fi
    
    echo $first_name$'\t\t'$last_name$'\t\t'$email>>~/.book/$last_name.txt
}

search ()
{
    if [[ $tag == "" ]] ; then
	echo "The following results were found for" $value":"
	echo "First Name	Last Name	Email"
	echo "---------------------------------------"
	grep -rih "^.*		$value		.*$" ~/.book
    elif [[ $tag == "--email" ]] ; then
	echo "The following results were found for" $value":"
	echo "First Name	Last Name	Email"
	echo "---------------------------------------"
	grep -rih "^.*		.*		.*$value.*$" ~/.book
    elif [[ $tag2 == "--whole-name" ]] ; then
	echo "The following results were found for" $value $tag":"
	echo "First Name	Last Name	Email"
	echo "---------------------------------------"
        grep -rih "^$value		$tag		.*$" ~/.book
    elif [[ $tag3 != "" ]] ; then
	echo "The following results were found for" $value $tag $tag2":"
	echo "First Name	Last Name	Email"
	echo "---------------------------------------"
	grep -rih "^$value		$tag		.*$tag2.*$" ~/.book
    fi
}

remove ()
{
    while read line; do
    rm_email=$(echo $line | cut -d" " -f3)
    echo "Would you like to delete" $fname $lname", with email address" $rm_email"? (y/n)"
    read -u 2 -p "" response
    if [[ $response == "y" || $response == "Y" ]] ; then
	link=$(grep -rl $fname$'\t\t'$lname$'\t\t'$rm_email ~/.book)
	sed -i "/^$fname		$lname		$rm_email$/d" $link
    fi
    done < <(grep -rih $fname$'\t\t'$lname ~/.book)
    
    if [[ $rm_email == "" ]]; then
	echo "No match for" $fname $lname
    fi
    
}

if [[ $1 == "help" ]] ; then
    help
fi

if [[ $1 == "add" ]] ; then
    first_name=$2
    last_name=$3
    email=$4
    add
fi

if [[ $1 == "search" ]] ; then
    value=$2
    tag=$3
    tag2=$4
    tag3=$5
    search
fi

if [[ $1 == "remove" ]] ; then
    fname=$2
    lname=$3
    remove
fi






