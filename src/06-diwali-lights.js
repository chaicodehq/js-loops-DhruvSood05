/**
 * 🪔 Sharma ji ki Diwali Decoration
 *
 * Sharma ji apne ghar ko Diwali pe sajana chahte hain light strings se.
 * Unke paas ek budget hai aur market mein alag alag colors ki light strings
 * hain different lengths mein. Sharma ji sab kuch lena chahte hain, lekin
 * budget se zyada nahi!
 *
 * Color rates (per meter):
 *   - "golden" = Rs 50/meter
 *   - "multicolor" = Rs 40/meter
 *   - "white" = Rs 30/meter
 *   - Any other color = Rs 35/meter
 *
 * Rules:
 *   Step 1 - Use for...of to loop through lightStrings and add ALL of them
 *     to selected list with their cost calculated
 *   Step 2 - Use a while loop to check: agar totalCost > budget, toh remove
 *     the LAST item from selected, subtract its cost, and keep removing until
 *     totalCost <= budget
 *
 * @param {Array<{color: string, length: number}>} lightStrings - Available light strings
 * @param {number} budget - Sharma ji ka budget in rupees
 * @returns {{ selected: Array<{color: string, length: number, cost: number}>, totalLength: number, totalCost: number }}
 *
 * Validation:
 *   - Agar lightStrings array nahi hai ya budget positive number nahi hai,
 *     return: { selected: [], totalLength: 0, totalCost: 0 }
 *
 * @example
 *   diwaliLightsPlan(
 *     [{ color: "golden", length: 5 }, { color: "white", length: 10 }, { color: "multicolor", length: 3 }],
 *     400
 *   )
 *   // golden: 5*50=250, white: 10*30=300, multicolor: 3*40=120
 *   // Total = 670 > 400, remove multicolor (670-120=550), still > 400,
 *   // remove white (550-300=250), 250 <= 400
 *   // => { selected: [{ color: "golden", length: 5, cost: 250 }], totalLength: 5, totalCost: 250 }
 */
export function diwaliLightsPlan(lightStrings, budget) {
  // Your code here
  if (
    !Array.isArray(lightStrings) ||
    budget < 0 ||
    typeof budget !== "number"
  ) {
    return { selected: [], totalLength: 0, totalCost: 0 };
  }

  let selected = [];
  let totalCost = 0;
  let totalLength = 0;
  let cost = 0;
  for (const lights of lightStrings) {
    switch (lights.color.toLowerCase()) {
      case "golden":
        totalLength += lights.length;
        totalCost += 50 * lights.length;
        lights.cost = 50 * lights.length;
        selected.push(lights);
        break;
      case "multicolor":
        totalLength += lights.length;
        totalCost += 40 * lights.length;
        lights.cost = 40 * lights.length;
        selected.push(lights);
        break;
      case "white":
        totalLength += lights.length;
        totalCost += 30 * lights.length;
        lights.cost = 30 * lights.length;
        selected.push(lights);
        break;
      default:
        totalLength += lights.length;
        totalCost += 35 * lights.length;
        lights.cost = 35 * lights.length;
        selected.push(lights);
    }
  }

  while (totalCost > budget) {
    const removed = selected.pop();
    switch (removed.color.toLowerCase()) {
      case "golden":
        totalLength -= removed.length;
        totalCost -= removed.cost;

        break;
      case "multicolor":
        totalLength -= removed.length;
        totalCost -= removed.cost;

        break;
      case "white":
        totalLength -= removed.length;
        totalCost -= removed.cost;

        break;
      default:
        totalLength -= removed.length;
        totalCost -= removed.cost;
    }
  }

  return {
    selected,
    totalLength,
    totalCost,
  };
}
