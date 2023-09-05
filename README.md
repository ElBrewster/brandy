# Brand Boosters Exercise from Beyond CSS

This repo is my implementation of the final project for Kevin Powell's course Beyond CSS. The figma file can be found [here](https://www.figma.com/file/yFI9a6XdwNfwUNRkcCX0GZ/BrandBoosters?node-id=7%3A551&mode=dev). I've used my own starter Sass template based on what I learned and implemented form his course. 10/10 I do recommend it!

## How To Use This Template

###### `cmd + shift + f` !!!

After clicking the "use template" option in Github and cloning down the template, all you need to do is enter `npm i` in your terminal to install dependancies.

Then, `npm run dev` to launch our development server with Vite and Sass.

Ctrl + c to stop running the dev server.

Try to use Ctrl+p/Cmd+P as much as possible to take advantage of having such a massive file system. Search should be easy with this architecture!

Don't forget to `@forward` new Sass partials/files you create!

"plug and play"

Cmd+shift+L to update all of something

You can `npm run build` if you want to see the css output file in /dist

To install the vite purgecss plugin: `npm i vite-plugin-purgecss --save-dev`

### To use **degit**

To install: `npm i -g degit`
To use: in terminal type `degit user/repo`

Private repos are not supported.
To grab this if I've made the repo public:
`degit github-username/SassStart Project-Name`
then `cd` into the project and `npm i` and all that

### PostCSS

Our main focus is on the plugin `postcss-preset-env`. It lets us use modern CSS that doesn't have perfect browser support. We can take advantage of things like `:is()` and `:has()`
[list of plugins](https://www.postcss.parts/)

`npm i postcss-preset-env -D`

### Default Browser List

- [this site "caniuse" for which browsers support a feature](<https://caniuse.com/?search=color()>)
- you can add a browser list to the `package.json` file or by creating a `.browserlistrc` file
- [this site can help you determine what browsers are included in your statement](https://browsersl.ist/), a statement like `0.25%, last 2 versions, not dead`
- a note that opera mini is a pain and sometimes worth excluding because of the features particular to that browser (it has an "Extreme" data saving mode that server-renders sites and switches many features to being unsupported). If it matters, `"browserslist": "> 0.5%, not dead, not op_mini all"`

## Check Out These Ideas & Resources & References

- The ".flow" idea is from Andy Bell
- [the 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

- [CUBE CSS class naming convention](https://cube.fyi/)
- [biuld a dashboard with CUBE CSS](https://piccalil.li/tutorial/build-a-dashboard-with-cube-css/)
- [CUBE CSS creator Andy Bell and interviewer Kevin Powell](https://www.youtube.com/watch?v=Y3EKje3JIT4)

- [LCH colors](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/)
- [5t3ph](https://twitter.com/5t3ph) does [talks like this](https://www.youtube.com/watch?v=Y50iqMlrqU8) and [blogs like this](https://css-tricks.com/standardizing-focus-styles-with-css-custom-properties/)
- [Kevin Powell on 'scrcset'](https://www.youtube.com/watch?v=2QYpkrX2N48)
- [on media query units](https://zellwk.com/blog/media-query-units/)
- [Incluslvely Hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)
- [on the hero section](https://foxxr.com/blog/epic-story-of-the-hero-image/)

- [mentioned for font clamps I think?](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/)

- [on the card component](https://smolcss.dev/#smol-card-component)

- [shadow generator](https://shadows.brumm.af/) (for box-shadows perhaps)

## Host Fonts Locally

"it can be more performant to self-host your fonts"
[use this site to change file type](https://www.fontsquirrel.com/tools/webfont-generator)
