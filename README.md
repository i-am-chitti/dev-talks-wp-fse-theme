# Dev Talks

![screenshot](https://user-images.githubusercontent.com/60139930/230917390-40afc2f7-2abf-489f-b128-f7c89d377f35.png)


Dev Talks Theme is a WordPress Full Site Editing (FSE) theme. It is built with flexibility in mind, allowing you to easily customize various aspects of the theme to fit your needs.

View samples - [Here](https://github.com/i-am-chitti/wp-fse-demo/tree/main/themes/dev-talks/screenshots)

## Features

Dev Talks Theme comes with a range of features to help you build a modern, user-friendly website:

- Full Site Editing (FSE) support: Dev Talks Theme is designed to work with WordPress Full Site Editing (FSE), allowing you to customize your entire website using the block editor.
- Customizable header and footer: You can easily customize the header and footer of your website using the block editor.
- Customizable homepage: Dev Talks Theme comes with a customizable homepage template that allows you to showcase your services, recent blog posts, and more.
- Customizable blog page: The theme comes with a customizable blog page template that allows you to display your blog posts in a clean, modern layout.
- Responsive design: Dev Talks Theme is designed to be fully responsive, ensuring that your website looks great on all devices.


## Understand the Folder Structure :open_file_folder:
```
 .
├── assets (Holds theme's assets)
│   └── src
│       └── js
│       └── css
├── bin (Holds scripts)
├── functions.php (PHP entry point)
├── inc
│   ├── classes (Holds all classes)
│   │   └── class-dev-talks.php (Instantiates all of the classes)
│   ├── helpers (PHP Helpers)
│   │   └── custom-functions.php
│   └── traits (PHP Traits)
│       └── trait-singleton.php
├── index.php
├── parts (Block Template Parts)
├── patterns (Block Patterns)
│   ├── *.html
├── style.css
├── templates (Block Templates)
│   ├── *.html
├── tests (Holds JS & PHP tests)
│   ├── bootstrap.php
│   ├── js
│   └── php
└── theme.json

```

## Development :computer:


**Production**

```bash
npm run build:prod
```

**Watch changes**

```bash
npm start
```

**Linting & Formatting**

Lint JS, CSS & PHP.
```bash
npm run lint:js
npm run lint:css
npm run lint:php #phpcs
```

Auto fix fixable linting errors for JS, CSS & PHP.

```bash
npm run lint:js:fix
npm run lint:css:fix
npm run lint:php:fix #phpcbf
```

**Testing**

Run all tests.

```bash
npm run test
```

Run JS tests.

```bash
npm run test:js
```

Watch JS tests.

```bash
npm run test:js:watch
```

Run PHP tests.

```bash
npm run test:php
```

