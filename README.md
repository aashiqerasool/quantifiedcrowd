# QuantifiedCrowd - Mobile Application

The application has been tested running on Linux and Mac OSX. Although Meteor has recently begun to support Windows, this application has not been run or tested on windows. As such no guarantees can be given when running on Windows.

In order to install and run this application in your environment:

1. Install Meteor for your OS. If you are installing on Linux or Mac OSX then just open a terminal and run the following:
    curl https://install.meteor.com/ | sh

If you are installing on Windows then you can need to first download and install Meteor on Windows from the following link:
    https://install.meteor.com/windows

Installing Meteor following the above methods will install the Meteor Framework and all its dependencies on your system

2. In this archive there are two folders, quantifiedCrowd and qcDashboard. Both are individual applications that function together. The applications are run in a development mode on Meteor. In order to do this on Linux or Mac OSX please do the following:

  First navigate to the root of this archive via the terminal/command line, then run the following:

    $ cd <app-root> //<app-root> will be either the root of the quantifiedCrowd folder or the root of the qcDashboard folder.
    $ meteor

It is recommended to first follow the above process and run quantifiedCrowd (mobile app) by replacing <app-root> with quantifiedCrowd, then follow the same process to run qcDashboard by replacing <app-root> with qcDashboard.

For Windows:

  Open the Microsoft Windows Command Line Interface and navigate to the root of this archive, then run the following commands for each of quantifiedCrowd and qcDashboard, as above for Linux and Mac OSX:
    
    > cd <app-root> //<app-root> will be either quantifiedCrowd or qcDashboard
    > meteor

Again, the same order of execution is recommended as with Linux/OSX.

Once these commands are done you will be able to access the respective applications by navigating to http://localhost:3000 (for quantifiedCrowd) and http://localhost:3001 (for qcDashboard).

Be aware that in the production version of this platform an external MongoDB server is used, that is hosted by MongoLabs, however when running this application elsewhere the local MongoDB instance provided and run by Meteor is used. Also some changes need to be made in the qcDashboard code before it can connect to the quantifiedCrowd backend required for the proper functioning of the application.

