# Exploring the Galaxy

## Overview

This website is a website that visualises the 2026 Formula 1 race calendar as a constellation-style star map. Where each circuit is represented as a constellation. Users can explore the map and click on stars to view information about each circuit.

![cars](images/cars.jpg)

## Design & Composition

I reinterpreted the NASA website structure by transforming its informational layout into an interactive constellation map. This leads to a second page with a minimal interface and shifts the purpose from passive reading to active exploration. Instead of displaying images and articles, I replaced the content with a star map showing each Formula 1 circuit from the 2026 season. The design uses contrast, with light stars against a dark background, to guide attention, similar to how real constellations are perceived. Gestalt principles like proximity and continuity group circuits and suggest connections between them, even though they are geographically unrelated. This creates a disruption between the expectation of astronomy and the content of motorsport, encouraging users to reinterpret what a “constellation” can represent.

User interaction also shapes meaning. Instead of scrolling through a traditional webpage, users navigate a large space-like environment. Clicking on stars to access circuit pages creates a sense of discovery, similar to exploring a night sky. This shift in interaction changes the tone from informative and structured to exploratory and playful.

## Technical

The galaxy page contains a main container (.map) that holds all star elements.
Each star is a div wrapped inside an `<a>` tag to make it clickable.
Classes such as `.star`, `.circle`, `.triangle`, and `.diamond` are used to define different shapes and styles.
Separate circuit pages are stored in a folder and linked through relative paths.

A key layout technique used in this project is absolute positioning within a relative container. This allows each star to be placed freely across the map, creating a scattered constellation effect. 

```
/* stars shapes */
.circle {
    border-radius: 50%;
    box-shadow: 0 0 10px white;
}

.triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid white;
    background-color: transparent;
    filter: drop-shadow(0 0px 10px white);
}

.square {
    filter: drop-shadow(0 0px 10px white);
}

.diamond {
    transform: rotate(45deg);
    filter: drop-shadow(0 0px 10px white);
}
```

One challenge I encountered was controlling the layout without using advanced techniques like JavaScript. Since the map relies on fixed pixel positioning, it was super time-consuming to put in every individual star to then align it to the image of the circuit. If I were to improve this project, I would explore responsive design or interactive movement, such as having the FOV effect or zooming in and out to better simulate a real galaxy map.

## Reflection & Future Development

If I could redo this project, I would like to strengthen the conceptual connection between the NASA/galaxy inspiration and Formula 1. Currently, the reference is mostly visual, but I aim to create a more direct transition from a NASA-like interface into the galaxy map, making the experience feel more cohesive and intentional. I would also expand the number of pages within the website to make the project feel more believable and immersive. Adding more about the drivers as astronaut, additional information layers, and possibly new sections would encourage users to explore further and spend more time navigating the site.

Other things I would add:
    
- Add hover labels for circuit names
- Thin down the circuit and add more stars to the shape
- Implement drag or zoom functionality (FOV)

## Credits & References

Inspiration:
- [NASA](https://www.nasa.gov)
- [Stellarium Web](https://stellarium-web.org/)
- [Formula 1](https://www.formula1.com/)

Technical Help:
- [CSS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Markdown](https://www.markdownguide.org/basic-syntax/#links)
