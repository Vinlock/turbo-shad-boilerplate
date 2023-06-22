module.exports = {
  extends: ["next", "turbo", "prettier"],
  globals: {
    "FC": "readonly",
    "FCC": "readonly",
    "FunctionalComponentWithChildren": "readonly",
    "JSX": "readonly",
    "NextPage": "readonly",
    "NextPageWithLayout": "readonly",
    "google": "readonly"
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
