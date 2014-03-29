# node-html2enml #

node-html2enml is a node.js module to convert HTML to Evernote ENML.

Unlike other implementations, html2enml parses the DOM tree of the HTML document and converts it to valid ENML, which results in a robust and reliable converstion

## Usage ##

Install html2enml via npm:

        npm install html2enml

Invote html2enml from a node.js script as follows:

        var html2enml=require('html2enml').convert ;
        // the htmldata variable should contain HTML string
        // base_uri contains uri to be prepended to convert relative URLs to absolute URLs
        // base_uri can be an empty string if base url is unknown
        html2enml(htmldata, base_uri, function(enml) {
          // successful conversion, enml argument contains valid enml
          // call Evernote API to add note
        }, function(enml) {
          // failure, enml variable contains xml with parsererror nodes
          // inform user
        }) ;


For testing, you can use the command-line tool:

        html2enml <html-file>

The package contains example HTML files in the 'testfiles' directory.
        
## Features ##

- en-media tag support, with download and calculation of MD5 Hash(hash attribute) and mime-type(type attribute) 
- validates converted ENML against ENML DTD
- case-insensitive tag and attribute conversions
- DOM based tag scanning and replacement

## License ##

GPLv3

## Known Issues ##

The logic of HTML 2 ENML conversion is rock-solid and compliant with the ENML standards,
but testing has been done on only a few documents.

If you have issues with conversions, please bring it to my notice.
