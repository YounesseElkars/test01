const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const electron = typeof process !== 'undefined' && process.versions && !!process.versions.electron;

async function print(){

  const driver  =  require('printer');

  const defaultPrinter  = driver.getPrinters().find(printer => printer.isDefault)

  if(!defaultPrinter) throw new Error("No default printer found");

  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: `printer:${defaultPrinter.name}`,
    driver: driver 
  });
  
  printer.alignCenter();
  printer.println("Hello world");
   printer.cut();
  
  try {
    let execute = printer.execute()
    console.log("Print done!");
  } catch (error) {
    console.error("Print failed:", error);
  }


  
}

print()
