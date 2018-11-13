module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  parser: "babel-eslint",
  "rules": {
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "comma-dangle": ["error", "never"],
    "function-paren-newline": ["error", "consistent"],
    "no-use-before-define": ["error", {"functions": false, "classes": true}],
    "arrow-parens": ["error", "as-needed"],
    "no-param-reassign": ["error", {"props": false}],
    "arrow-body-style": ["error", "as-needed"],
    "jsx-a11y/anchor-is-valid": [2, {
      components: ["Link"],
      specialLink: ["hrefLeft", "hrefRight", "to"],
      aspects: ["noHref", "invalidHref", "preferButton"]
    }],
    "arrow-body-style": ["error", "as-needed"],
    "no-underscore-dangle": ["error", { "allow": ["_id"] }]
    // "react/prop-types": ['error', { ignore: 'map' }],

  },
  "extends": "airbnb",
  "plugins": [
    "react"
  ]
};
