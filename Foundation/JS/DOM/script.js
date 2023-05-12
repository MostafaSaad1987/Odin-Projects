const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.cssText = "color: red;";

const thirdHead = document.createElement("h3");
thirdHead.textContent = "I'm a blue h3!"
thirdHead.style.cssText = "color: blue;";

const child = document.createElement("div");
child.style.cssText = "border: solid black; background-color: pink;";

const firstHeader = document.createElement("h1");
firstHeader.textContent = "I'm in a div";

const childPara = document.createElement("p");
childPara.textContent = "ME TOO!";

child.append(firstHeader);
child.append(childPara);

container.append(paragraph);
container.append(thirdHead);
container.append(child);