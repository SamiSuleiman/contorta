import daisyui from "daisyui";

module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,md}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui:{
    themes:["black"]
  }],
};
