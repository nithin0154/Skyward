const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname); // Scans current folder and subfolders

function scanFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanFiles(fullPath);
    } else if (file.endsWith(".js")) {
      const content = fs.readFileSync(fullPath, "utf-8");

      const regex =
        /app\.(get|post|put|delete|use|all)\(\s*['"`]https?:\/\/[^'"`]+['"`]/g;

      const matches = content.match(regex);

      if (matches) {
        console.log(`⚠️ Found invalid route in file: ${fullPath}`);
        matches.forEach((match) => console.log(`   → ${match}`));
        console.log("------------------------------------------");
      }
    }
  });
}

scanFiles(directoryPath);
