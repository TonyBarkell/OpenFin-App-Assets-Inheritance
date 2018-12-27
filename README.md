# OpenFin-App-Assets-Inheritance
Exmaple OpenFin App demonstrating OpenFin App Assets being inherrited by child applications

## Installation and runnint:

    npm install
    npm start

## App Asset Inheritance

The 'parent' app includes MS Paint as an application asset.  The asset can be launched using the 'Open Paint' button.

Clicking the 'Open Child App' button will create a child app using the new Application constructor.  The Child Apps, and Grandchild apps, will Inherit the Parents Application assets, this can be tested using the 'Open Paint' button from any child, or gradchild.