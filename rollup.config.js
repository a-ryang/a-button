import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";

export default {
  input: "package/style.css",
  output: {
    file: "dist/index.css",
    format: "es",
  },
  plugins: [
    postcss({
      plugins: [
        postcssImport(),
        // https://github.com/postcss/postcss-url
        url({
          url: "inline",
        }),
      ],
      extract: true,
      minimize: true,
    }),
  ],
};
