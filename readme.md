<p align="center">
  <img src="https://user-images.githubusercontent.com/2771377/117469209-b4399980-af6a-11eb-89f8-d49dc06e688c.png" width="200">
  <h1 align="center">Tooti (طوطی)</h1>
</p>

Tooti is an automation tool which tracks user's behavior in a browser and automates the recorded session by repeating the exact actions.

> This project has been created with the purpose of university researches **under supervision of Dr. Mohammad R. Moosavi in Shiraz University of Technology and Science**

## Used Technologies

- [Node.js](https://nodejs.org/en/)
- [Google's puppeteer](https://developers.google.com/web/tools/puppeteer)
- [Express](https://expressjs.com/)
- [NeDB](https://github.com/louischatriot/nedb)
- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [Vue](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://github.com/axios/axios)
- [Element Plus UI Framework](https://element-plus.org/)

## Assets Used in the Project

- [Vazir Font](https://github.com/rastikerdar/vazir-font)

## Installation and Usage

1. First, ensure that you have [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/getting-started/install) and [Google Chrome](https://www.google.com/chrome/) installed on your machine.

2. Clone the repository:

```bash
git clone https://github.com/Alireza29675/tooti
```

3. Open Terminal and change the directory to the project's root directory:

```bash
cd tooti
```

4. Install the project's dependencies:

```bash
yarn install
```

5. Run the project:

```bash
yarn dev
```

6. Browser will be auto started and you should see this page:

<img alt="Tooti" src="https://user-images.githubusercontent.com/2771377/133924202-61e048b2-4e49-4106-8bd9-43cb4aa8ccfe.png">

7. App is ready to use.

## Todos

### Tracker

- [x] Opens an under track browser ✔️
- [x] Makes bundled modules out of script tags ✔️
- [x] Injects behavior tracker module to the pages while navigating the web ✔️
- [x] Stores all events into local database ✔️

### Automator

- [x] Can automate clicks ✔️
- [x] Can automate typing text in inputs ✔️
- [x] Can automate pressing enter, tab and escape ✔️
- [x] Can automate navigations ✔️
- [x] Robot-like delays between actions ✔️
- [ ] Show suitable errors if selectors have been changed

### User Interface

- [x] Create a user interface ✔️
  - User can create new sessions ✔️
  - Can see a list of recorded sessions ✔️
  - Reply recorded sessions ✔️

## Author

[Alireza Sheikholmolouki](mailto:alireza.sheikholmolouki@gmail.com)

## Supervisor

Dr. Mohammad R. Moosavi

Shiraz University
