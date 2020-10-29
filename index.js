const colors = {
  black: "#191724", // selection font color
  lightBlack: "#605f63",
  white: "#a7a5b8",
  lightWhite: "#e0def4",
  blue: "#31748f",
  lightBlue: "#31748f", // normal folders: font color
  cyan: "#7cc2c2",
  lightCyan: "#afeeee", // symlink folders: font color 
  green: "#8bd995", // folders background
  lightGreen: "#c7edd4",
  magenta: "#9f88e3", // correct directory
  lightMagenta: "#c4a7e7",
  red: "#c25977",
  lightRed: "#eb6f92",
  yellow: "#f0bf7a",
  lightYellow: "#f7d29e"
};
exports.decorateConfig = config =>
  Object.assign({}, config, {
    padding: "30px 30px 20px 30px",
    backgroundColor: "#191724",
    foregroundColor: "#e0def4",
    cursorColor: "#bab9c4",
    selectionColor: "rgba(112, 110, 134, 0.2)",
    borderColor: "#0000",
    colors
  });
