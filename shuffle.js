let buttons = document.getElementsByTagName("button");
let shuffle_button;

const Time = 30000; // 30 Seconds

for (let i in buttons)
    if (buttons[i].title == "Disable shuffle")
        shuffle_button = buttons[i];
if (shuffle_button == null) 
    console.error("could not find shuffle button :(");
else {
    setInterval(() => shuffle_button.click(), Time);
    setInterval(() => shuffle_button.click(), Time + 1000);
}
