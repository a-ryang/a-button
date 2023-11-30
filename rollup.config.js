import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

export default {
  input: "package/index.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    postcss({
      plugins: [postcssImport()],
      extract: true,
      minimize: true,
    }),
  ],
};
