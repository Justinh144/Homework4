Here is my submission for the daily work calender.

It starts with the date a time displayer which uses the dayjs library. The #currentdate
and #currentday are setup to be replaced with the appropriate date and day. The clock is a little more
involved as it needs the setInterval function that updates it every second and then triggers the updateClock function.

Line 22 begins the updateColor function which does what its name emplies; updates the color. It once again uses dayjs. the currentHour var is being changed first with the following for loop. It runs a length of the numbers 9 through 17. Java seems to default to military time as opposed to the AM/PM section. My div ID's were all ordered as
10am, 11am, 12pm etc so to change this I used the colorBlock var on line 27 to invoke jquery with the # + i + AM parameters. This takes the currentHour var wich is set to update dayjs hourly .

At 32 we run an if loop with the current Hour. I tried to make it as simple as possible.
The currentHour var reads off of [i] as its runs 9 - 17. It then uses the # + i + AM method to relay
the corresponding class based off wether the time is less than, equal to, or greater than the current time.
I elected to make a second class for the PM id's as doing both with one for loop would make the loop much more complicated.

Line 55 does a 'DOMContentLoaded' function which prevents the page from loading until all the elements have been loading.
57 inputAreas var uses the querySelectorAll to select all the description classes in the various time divs.

Line 56 uses the forEach method to iterate through each inputArea with the arrow function. 67 retrieves any entries that would be in the local storage from being entered in the funcion that happens next. At line 77 we setup the inputAreas string with an input function that records the text to the local storage.

Line 92 uses the savedInputs var to start setting up or save button with the id saveBtn. Each button has an eventListener, I had to add a default eventListener on line 97 before the actual function because without it any text on a time block would be saved to all blocks instead of just that one. Next is the actual eventListener with the click function. Line 102 uses 'this' to grab the previous element sibling id which would be the corresponding divs button. Line 105 takes the inputed text from that div and then saves them to the local storage which gets called on by the previous function when the page is reloaded.

Justin Hodges
