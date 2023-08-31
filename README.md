# How To Use This Template

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

- assess what "stage" you want to set the postcss config to. Do you want safest CSS output, or do you want to use the most recent and experimental features?
- you can look up particular features by stage [here](https://preset-env.cssdb.org/features/)
- setting the stage to "4" is the most conservative, and "0" is the most aggressively updated and ignores some browser compatability & support
- Kevin Powell on `stage: 4`: "I'm only using the most stable features available right now, so only look for those and nothing else"
- Kevin Powell on `stage: 0`: "You might not want to use `stage:0`...because highly experimental features often mean the syntax is very volatile and it could leave you with unsupported CSS if the spec changes down the road, which can be highly likely."
- and, "If you want to experiment with things in a personal project, `stage: 0` is great."
- "If you're building thigns for clients and don't want to risk having to update things when the spec changes...you might want to go with `stage: 3`, which means featurees that are stable and are on their way to becoming a standard."
- "2" is the plugin's default.

- [here is the list of features you can reference for the config](https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md)
- to stop-list particular features:

```js
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        "logical-properties-and-values": false,
      },
    }),
  ],
};
```

- to go-list some and move the stage back to more conservative (KP preference for this angle):

```js
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "trigonometric-functions": true,
      },
    }),
  ],
};
```

- long and short of it is, KP prefers to go with `stage: 3` and add features that work well to the `features`

### pictures and logos

[for svgs](https://svgsprit.es/)

- remove fill from the svg `<symbol>` and `<path>` and add your dynamic stuff in

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

## Analysing a Design

- colors and fonts
  - "what type of consistency"
  - are there red flags, are headings different and odd
- sections and spacing (if you're in figma you can look at the px)
  - spacing vs a visual line (and are the lines consistent?)
  - for instance in the chef project, each section had a different title/subtitle/line or none/lead title + text
  - what is definitely going to be the same?
  - what needs media query consideration (when the screen gets narrow what will look weird)
- custom things like a hover effect
- go over it again because you'll notice smaller details on teh second run-through
- what would be useful to add to the template
- a lot of folks are given a desktop design so they don't do mobile first, but he's suggesting you can, which means you'll have to make a few decisions

## Design Implementation

- consider switching from pixels to rems, especially with the font sizes
- add new size variables for all those you don't have as defaults in the figma/doc ref (margins and padding on everything, gaps, etc)
- uppercase text, centered text, box-shadows
- different layouts: 2/3/4 column layouts for instance, container and a wider container
- underline decorations
- buttons

after filling out the abstracts, add utilities like container properties

to start building out the site, start with the main section component and build out the variations of it first (headings and small line breaks and p tags and etc)

- get a strong base going
- logic out the parts:

  - section + subtitle (no decoration)
  - section + subtitle + decoration
  - section (no subtitle) (no decoration)

- once you are at the stage of adding/refining tokens, decide whether to focus on components or token types and work from there

//if KP wants the feedback
on narrow widths the menu covers content, yuck
copy functionality on his code blocks like I've seen elsewhere (little copy icon)

KP's personal taste is 5 or more classes on an item is too much (this must be why he doesn't care for tailwind)

HTML will pic the first picture in a series available (opposite the cascade)

avoid the dangler

"screen real estate"

"the more verbose and obvious a class is, the more you know it'll be used very consistently by the people using it"
perhaps look at [this](https://nordhealth.design/naming/)

## Host Fonts Locally

"it can be more performant to self-host your fonts"
[use this site to change file type](https://www.fontsquirrel.com/tools/webfont-generator)

### Super Heckin Basic Setup:

_(if you're not cloning the template)_

`npm create vite@latest`
`npm i`
`npm install sass --save-dev`
add `<link rel="stylesheet" href="sass/style.scss`
`npm run dev`

####

on CUBE
embrace CSS and the cascade, embrace globals being a feature instead of seeing it as a problem, isntead of seeing CSS as needing to be fixed

Exceptions being variations on your composition, so perhaps the inverse of something. These are identified with "data-type" so you can use your original composition and just add the data type attribute to apply the exception
Dealing with finite state. Can only be one thing at one time. Some systems you can add a ton of modifiers to change the state, especially if you're using JavaScript to apply these exceptions to state. So using data attributes enforces "finite state"
(example traffic light component) "quells the reason to use CSS in JS" You're using the web platform to do your job for you

Composition layer is about layouts, shoving your components into a layout where you've got slots spaces for the bits
Uses the cascade principle since you build the bits ont top of the layers

Utilities are classes that do one job, like Tailwind. Usually applying one property, like a background color, or a wrapper with several CSS rules applied to the wrapper. Like visually-hidden. At this point the implementation is fine-tuning.

Design systems use design tokens (design rules?), so the items on a Figma file. The design token lives in Figma and then you take them and apply them to CSS

Block. A block is a skeletal component or organisational structure. By the time you get to this point, most of the work has been done with global CSS, composition, and utility layers
Setting specific rules for specific content. It's a context or a name-space for something specific. Safety in having a block-class that preffixes everything. More specificity at this point. Whatever you define in the block will take more precedence

Classes in [ ]
The elements’s primary block class
Any subsequent block classes
Standard utility classes
Design token utility classes

like this:

```html
<article
  class="[ card ] [ section box ] [ bg-base color-primary ]"
  data-state="reversed"
></article>
```

or

```html
<article
  class="card | section box | bg-base color-primary"
  data-state="reversed"
></article>
```
