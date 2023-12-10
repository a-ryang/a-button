import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

export default {
  input: "package/style.css",
  output: {
    file: "dist/index.css",
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
