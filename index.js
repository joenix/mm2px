// Use DPI
import dpi from "dpi.js";

// Functional
function mm2px(value = 0, DPI = dpi().x, ratio = 25.4) {
  return Math.round((value / ratio) * DPI);
}

// Export
export default mm2px;
