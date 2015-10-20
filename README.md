Fork from defunct site userscripts.org (copied from http://userscripts-mirror.org/scripts/show/102775)

# slickdeals clean url

Remove link tracking in websites such as Slickdeals and fatwallet.

For example, you may have
http://slickdeals.net/?sid=5&url=http://otherwebsites.com

This script will make it
http://otherwebsites.com

This is very useful if you are using hosts file to stop some spam sites.

It will also speed up your connection as it bypasses third party redirect.

Update:
October 20, 2015
* Added https support.
* Forked script from defunct site userscripts.org (copied from http://userscripts-mirror.org/scripts/show/102775)

May 28, 2013
* Added decode of '&', replace all '&' with & in links.
May 20, 2012
* use array.length to get the last http link

May 16, 2012
* Added support of decodeURIComponent
* Added support for new tracking method in Slickdeals (SD now tracks twice, not sure what they are doing).
* Added the website of fatwallet.com
