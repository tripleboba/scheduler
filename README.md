# Meeting Scheduler

Project will be built in 5 days applying **Storybook**-based approach (build components 1 at a time in isolation)
- build components in isolatioin (buttons, individual list items,...)
- build more complex components: controlled components with forms,...
- use an API to retrieve data in **React** using **`axios`** and render data using components
- implement Custom **React Hooks**
- implement advanced React patterns to manage the state and add live updates

<b> Stacks </b>
- UI development: Storybook & React (slightly touch on React Developer Tools for debugging)
- Live server development: Webpack Dev Server
- Testing framework: Jest
- Automated End-to-End UI testing: Cypress

<b> Images </b>
![Add meeting](display/1%20-%20add%20appoinment.png)
![](display/2%20-%20save%20appointment.png)
![](display/3%20-%20appointment%20added.png)
![](display/4%20-%20delete%20appointment.png)
![](display/5%20-%20confirmed%20delete.png)
![](display/6%20-%20error%20status.png)
![](display/7%20-%20delete%20error.png)
![](display/8%20-%20validate%20input.png)
![](display/9%20-%20save%20error.png)

---
## Setup
Install dependencies with `npm install`.

For M1, need both
```sh
npm i -D sass
```
```sh
npm install node-sass@4.14.1
```

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

### Setup Scheduler DB API 
[follow setup db api instruction here](https://github.com/tripleboba/scheduler-api)