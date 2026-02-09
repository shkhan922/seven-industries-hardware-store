const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read Excel files
const file3 = XLSX.readFile(path.join(__dirname, '../..', 'Rate List 3.xlsx'));
const file4 = XLSX.readFile(path.join(__dirname, '../..', 'Rate List 4.xlsx'));

const products = [];
let productId = 1;

// Function to extract category from product name
function extractCategory(productName) {
  if (productName.includes('Hook')) return 'Hooks';
  if (productName.includes('Bolt')) return 'Bolts';
  if (productName.includes('Key Hole')) return 'Key Holes';
  if (productName.includes('Handle')) return 'Handles';
  if (productName.includes('Knob')) return 'Knobs';
  if (productName.includes('Bracket')) return 'Brackets';
  if (productName.includes('Hinge')) return 'Hinges';
  if (productName.includes('Lock')) return 'Locks';
  if (productName.includes('Latch')) return 'Latches';
  if (productName.includes('Catch')) return 'Catches';
  if (productName.includes('Stopper')) return 'Stoppers';
  if (productName.includes('Plate')) return 'Plates';
  if (productName.includes('Ring')) return 'Rings';
  if (productName.includes('Screw')) return 'Screws';
  if (productName.includes('Nail')) return 'Nails';
  return 'Other';
}

// Function to extract products from a workbook
function extractFromWorkbook(workbook, fileName) {
  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    data.forEach((row) => {
      // Handle both single and double column layouts
      const productName = row['Product Name'] || row['Name'] || row['Item'] || '';
      const priceStr = row['Price'] || row['Rate'] || row['Cost'] || '';

      // Parse price - remove "/Pcs" or other suffixes
      let price = 0;
      if (priceStr) {
        price = parseFloat(priceStr.toString().split('/')[0]);
      }

      const product = {
        id: productId++,
        name: productName,
        category: extractCategory(productName),
        price: price,
        quantity: row['Quantity'] || row['Qty'] || 0,
        description: row['Description'] || row['Details'] || '',
        sku: row['SKU'] || row['Code'] || `SKU-${productId}`,
        source: fileName
      };

      // Only add if it has a name and price
      if (product.name && product.price > 0) {
        products.push(product);
      }

      // Handle double column layout (Item_1, Rate_1, etc.)
      const productName2 = row['Item_1'] || row['Name_1'] || '';
      const priceStr2 = row['Rate_1'] || row['Price_1'] || '';

      if (productName2) {
        let price2 = 0;
        if (priceStr2) {
          price2 = parseFloat(priceStr2.toString().split('/')[0]);
        }

        const product2 = {
          id: productId++,
          name: productName2,
          category: extractCategory(productName2),
          price: price2,
          quantity: row['Quantity_1'] || row['Qty_1'] || 0,
          description: row['Description_1'] || row['Details_1'] || '',
          sku: row['SKU_1'] || row['Code_1'] || `SKU-${productId}`,
          source: fileName
        };

        if (product2.name && product2.price > 0) {
          products.push(product2);
        }
      }
    });
  });
}

extractFromWorkbook(file3, 'Rate List 3');
extractFromWorkbook(file4, 'Rate List 4');

// Reset IDs to start from 1
products.forEach((product, index) => {
  product.id = index + 1;
  product.sku = `SKU-${index + 1}`;
});

// Save to JSON
const outputPath = path.join(__dirname, '../public/products.json');
fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));

console.log(`✓ Extracted ${products.length} products`);
console.log(`✓ Saved to ${outputPath}`);
console.log('\nSample products:');
console.log(JSON.stringify(products.slice(0, 3), null, 2));

