const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
  ],
};

// module.exports = {
//   plugins: [
//     postcssPresetEnv({
//       stage: 3,
//       features: {
//         "logical-properties-and-values": false,
//         "opacity-percentage": true,
//         "text-decoration-shorthand": true
//       }
//     }),
//   ],
// };