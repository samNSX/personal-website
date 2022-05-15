const theme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["index.html", "src/**/*.jsx"],
  mode: "jit",
  theme: {
    extend: {
      inset: {
        unset: "unset",
      },
      width: {
        "fit-content": "fit-content",
      },
      keyframes: {
        "slide-x-reveal": {
          "0%": { opacity: "0", transform: "translateX(10%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
      },
      dropShadow: {
        "brutal-orange": "5px 3px 0px orange",
      },
      boxShadow: {
        "creator-card-img": "0px 34.4728px 57.9769px rgba(0, 0, 0, 0.15)",
        "2xl-light": "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
        "brutal-blue": "4px 4px 0 0px #173995",
      },
      animation: {
        "slide-x-reveal": "slide-x-reveal 300ms ease-in-out",
      },
      transitionProperty: {
        composite: "transform, opacity",
      },
      zIndex: {
        1: 1,
        negative: -1,
      },
      fontSize: {
        xxs: ".55rem",
      },
      screens: {
        "pointer-fine": {
          raw: "(pointer: fine)",
        },
        "vh-800": { raw: "(min-height: 800px)" },
      },
      colors: {
        iris: "#6C42C5",
        "deep-purple": "#210631",
        sunglow: "#FACD2E",
        persimmon: "#FF7346",
        "sky-blue": "#81D2FF",
        "cornflower-purple": "#A8A5F5",
        "sunset-red": "#FF4E4E",
        lime: "#44C030",
        "off-white": "#EFF4F5",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const values = ["50", "56", "300", "496"];
      const newUtilities = {};

      values.forEach((value) => {
        newUtilities[`.w-fit-parent-${value}px`] = {
          width: `calc(100% + ${value}px)`,
          "margin-left": `-${Math.floor(value / 2)}px`,
        };
      });

      addUtilities(newUtilities);
    }),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("has-backdrop-filter", ({ container, separator }) => {
        const isRule = postcss.atRule({
          name: "supports",
          params:
            "((-webkit-backdrop-filter: none) or (backdrop-filter: none))",
        });
        isRule.append(container.nodes);
        container.append(isRule);
        isRule.walkRules((rule) => {
          rule.selector = `.${e(
            `has-backdrop-filter${separator}${rule.selector.slice(1)}`
          ).replace(/\\\\/g, "")}`;
        });
      });
    }),
  ],
  // plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
