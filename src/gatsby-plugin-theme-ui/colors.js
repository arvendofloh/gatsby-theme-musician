const colors = {
  // Theme UI colour names
  text: "#111",
  background: "#fff",
  primary: "#ff2121",
  secondary: "#05a",
  accent: "#11111120",
  muted: "#737373",

  // Additional colour names
  bgAccent: "rgba(0,0,0,0.1)",
  bgOpaque: "rgba(255,255,255,0.9)",
}

colors.bgGradient = `linear-gradient(150deg, ${colors.accent} 10%, ${
  colors.text
} 60%, ${colors.text} 100%)`

export default colors
