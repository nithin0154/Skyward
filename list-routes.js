const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname);

function scanFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanFiles(fullPath);
    } else if (file.endsWith(".js")) {
      const content = fs.readFileSync(fullPath, "utf-8");

      const regex = /app\.(get|post|put|delete|use|all)\(\s*([^\),]+)/g;

      let match;
      while ((match = regex.exec(content)) !== null) {
        console.log(`🔍 Found route in ${fullPath}:`);
        console.log(`   → ${match[0]}`);
        console.log("----------------------------------");
      }
    }
  });
}

scanFiles(directoryPath);
