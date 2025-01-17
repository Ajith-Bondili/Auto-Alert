AutoAlert
=====

AutoAlert is a security application that detects when a thief steals your car and automatically sends a message to the police and the car owner. The app includes customizable features for daily protection and car information management.

<p align="center">
  <img src="Frontend/Assets/GreetingPageSS.png" alt="HomeScreen" width="300" />
  <img src="Frontend/Assets/CarInfoPageSS.png" alt="CarInfoPage" width="300" />
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How We Built It](#how-we-built-it)
- [Challenges We Ran Into](#challenges-we-ran-into)
- [What’s Next for AutoAlert](#whats-next-for-autoalert)
- [Installations](#Installations)


  
## Introduction

AutoAlert leverages OpenCV and Twilio to detect potential car thefts and notify the authorities and users instantly. The system captures video footage, processes it to identify suspicious activities, and sends real-time alerts to users via a mobile app built with React Native.

## Features

- Real-time car theft detection: Uses OpenCV to analyze video footage and detect potential car thefts.
- Immediate alerts: Sends notifications through Twilio to police and users when a theft is detected.
- Customizable settings: Users can customize detection times, input car details, and configure alert settings through the mobile app.
- Mobile app: A React Native app allows users to manage their settings and receive alerts on the go.


## How We Built It

Our project utilizes Python, OpenCV (cv2), and a trained model using Roboflow to detect and track suspicious activity around vehicles in real-time by parsing video frames. Upon detecting potential threats, our system promptly sends SMS alerts to emergency services and users via the Twilio API. We developed a mobile application using React Native, enabling users to customize alert timing intervals and car details, offering a personalized and responsive security solution for vehicle owners.

## Challenges We Ran Into

Initially, we had no experience with React Native or iOS app development. A significant challenge was setting up the React Native environment, which involved learning to use command-line tools and managing dependencies with npm. As we progressed, we faced challenges such as parsing lengthy videos, which slowed down the system due to the high number of frames. Additionally, we encountered difficulties with GitHub, including conflicts and branching errors. We also experienced issues with integrating Twilio for SMS notifications, which required troubleshooting and problem-solving to resolve.


## What’s Next for AutoAlert

In the future, we plan to develop our own hardware camera integrated with our software, providing a seamless experience for users. Additionally, we aim to offer a subscription service for customers using third-party camera systems. We also intend to partner with government agencies, including law enforcement, and other security companies to collaboratively reduce criminal activity related to automobiles.

## Installations

1. Clone the repository:
```
git clone https://github.com/your-username/autoalert.git
cd autoalert
```

3.	Install the dependencies:

```
npm install
```

3.	Start the project:
```
npm start
```

5.	For iOS:
```
npm run ios
```

7.	To run the backend, use pip to install the required Python packages:
```
pip install opencv-python twilio
```

9.	Sign up with Twilio to create your own unique API key and update the config.py file with your Twilio credentials.

