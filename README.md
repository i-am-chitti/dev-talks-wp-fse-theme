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

## Installation
1. Download this as zip
2. In your WordPress dashboard, navigate to Appearance > Themes.
3. Click on the "Add New" button.
4. Click on the "Upload Theme" button.
5. Choose the zip file you downloaded in step 1.
6. Click the "Install Now" button.
7. Once the theme is installed, click the "Activate" button to activate it.
8. Create two pages and set one as homepage and other as front page from `Reading` sub-page of `Settings` page in WordPress Dashboard.

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

## Support
If you need help with Dev Talks Theme, please reach out to our support team at deepak.kumar852182@gmail.com. We are always happy to help with any questions or issues you may have.

## License
Dev Talks Theme is released under the GPLv2 or later license. You are free to use, modify, and distribute the theme as long as you follow the terms of the license.
