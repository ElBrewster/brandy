# Brand Boosters Exercise from Beyond CSS

This repo is my implementation of the final project for Kevin Powell's course Beyond CSS. The figma file can be found [here](https://www.figma.com/file/yFI9a6XdwNfwUNRkcCX0GZ/BrandBoosters?node-id=7%3A551&mode=dev). I've used my own starter Sass template based on what I learned and implemented form his course. 10/10 I do recommend it!

## Stills

<img width="963" alt="hero" src="https://github.com/ElBrewster/brandy/assets/113723085/7daa5798-c581-4c2d-bf46-be08fcdf2bc9">

<img width="968" alt="about" src="https://github.com/ElBrewster/brandy/assets/113723085/5980d6da-6b86-4a5c-aa3c-0f1420325353">

<img width="1919" alt="features" src="https://github.com/ElBrewster/brandy/assets/113723085/77849c31-c72b-4dc1-a24c-8d3795dcb8c6">

<img width="1919" alt="page 2 hero" src="https://github.com/ElBrewster/brandy/assets/113723085/dde777c0-340b-4ff0-aa34-6ee49799cc0b">

<img width="959" alt="what we can do" src="https://github.com/ElBrewster/brandy/assets/113723085/21a0d61c-035a-4e53-9066-9a649e9ab9c1">

<img width="1918" alt="benefits" src="https://github.com/ElBrewster/brandy/assets/113723085/9b239be7-1094-4dfa-8963-e3a291c39cd5">

<img width="967" alt="feature list" src="https://github.com/ElBrewster/brandy/assets/113723085/29694daf-d2dc-489d-b369-2db0d50b1b9b">

<img width="1915" alt="testimonial" src="https://github.com/ElBrewster/brandy/assets/113723085/0adeeb51-f0b3-4363-8ec7-c654a91f5459">

<img width="1918" alt="flexible plans grid" src="https://github.com/ElBrewster/brandy/assets/113723085/44931a5c-b761-44b2-a620-e3b32139f14b">

<img width="1913" alt="Compare plans grid" src="https://github.com/ElBrewster/brandy/assets/113723085/ba350b55-0b6e-4143-88e0-7c279169ec16">

<img width="1915" alt="contact" src="https://github.com/ElBrewster/brandy/assets/113723085/3d0b7f78-b01f-42f2-bcef-2db21d7adfa4">



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
