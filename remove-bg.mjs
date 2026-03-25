import Jimp from "jimp";

async function makeTransparent() {
  try {
    const image = await Jimp.read("public/logo.png");
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      // Get RGB values
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      // If the pixel is pure black or very dark (background)
      if (red < 20 && green < 20 && blue < 20) {
        this.bitmap.data[idx + 3] = 0; // Alpha = 0 (Transparent)
      }
    });

    await image.writeAsync("app/icon.png");
    console.log("Successfully removed black background and saved to app/icon.png");
  } catch (error) {
    console.error("Error modifying image:", error);
  }
}

makeTransparent();
