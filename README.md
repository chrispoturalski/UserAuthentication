# User Authentication Project

## Table of Contents

- [Description](#description)
- [Instructions](#instructions)
- [Usage](#usage)
- [Credits](#credits)
- [Contributers](#contributers)
- [Testing](#testing)
- [Future Integrations](#future)
- [Questions](#questions)

## Description

![Image 1](/UserAuthentication/Assets/Initial.png)
![Image 1](/UserAuthentication/Assets/Shows-Password.png)
![Image 1](/UserAuthentication//Assets/Success-Message.png)
![Image 1](/UserAuthentication//Assets/Error-Message.png)

In this module, I had developed an application that is able to take in and authenticate a username & password.
This short mini project has a couple of functions that are able to take in a username/password, validate that 
username/password, and then display a message of "Success" or "Access denied." I also supplied another function
to encrypt a password, so your password would not be vulnerable. There are a couple of more functions
that are involved in this project. For example, if two different usernames have the same password - it will be able
to encrypt and not have the same encryption, so a hacker would not be able to crack the code and use the same encrypted
password.

## Instructions

First step, you would have to open an integrated terminal and install our dependencies:
'npm init -y'
'npm i express bcrypt'
'npm i --save-dev nodemon'
Second step, you would go into the request.rest file and then Send the first POST request.
Third step, in that same request.rest file, send the GET request.
Fourth step, in that same request.rest file, send the second POST request to see if the passwords then match.

## Usage

In this application, I had to download the express module to get the application started.

## Credits

I had watched Web Dev Simplified on Youtube to follow along with this project.

## Contributers

N/a

## Testing

N/a

## Future

For future, it would be an idea to set this up as a webpage, create a new user via webpage, save all information
within an array and then print on the webpage whether or not the username/password was authenticated.

## Questions

To view all of my projects, you can view them on my Github profile -  https://github.com/chrispoturalski

If you have any questions about my project, you can reach me via email at - chrispotural@gmail.com