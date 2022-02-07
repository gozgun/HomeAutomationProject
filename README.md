# Home Automation Project
A simulation for a home automation app using JavaScript, HTML, CSS and Bootstrap.

With specialized buttons in the Control Panel, users can turn on/off lights, close/open curtains and change the temperature. A new feature can be added via adding new JS function and updating the relevant HTML components. A new room can simply be added via copying the HTML component dedicated for rooms and updating the identifier number (i.e. temp_1 is related to Room 1)

Some use cases are;

- When the temperature is above or equal to 35 Celsius, the text becomes red and if it is below or equal to 15 Celsius the text becomes blue.
- When the curtains are closed and the lights are off, the room is dark.
- When the curtains are closed and the lights are on, the room becomes semi-visible.
- When the curtains are open and the lights are off, the room becomes semi-visible.
- When the curtains are open and the lights are on, the room becomes visible.

In order to understand the general architecture, I referenced the following project, https://github.com/egch/house-automation-js.
