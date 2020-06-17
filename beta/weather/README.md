# Welcome to the new **BETA** weather system!

## Why?

- More effecient
- Supports *both* desktop and mobile

## Info for the nerds

### How does the system detect for geolocation and device type?

#### Geolocation testing

While one could just use:

`if (navigator.geolocation) { //GEOLOCATION SUPPORTED }`

We decided to use [Modernizr](https://modernizr.com/)'s HTML Geolocation detection.

Our resulting code was:

`if (Modernizr.geolocation) { //GEOLOCATION SUPPORTED }`

#### Device type detection

**NOTE**: This system is way to simple right now, we will propbably improve this system.

We use a simple `if` statement to detect the height and width of the browser.

`if (window.innerHeight < 850) {
                if (window.innerWidth < 450) {
                    console.log('Mobile device')
                    mob.innerHTML = '&#9989'
                    mob.title = 'Mobile device detected'
                    url = winLocFull + '/m/?geo=true'
                }
            }
            else {
                console.log('Not mobile device')
                mob.innerHTML = '&#9940'
                mob.title = 'No mobile device detected'
                url = winLocFull + '/d/?geo=true'
            }`

The above code may be formatted badly.

## "Fun" Facts

### True or false