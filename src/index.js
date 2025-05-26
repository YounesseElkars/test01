var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const electron = typeof process !== 'undefined' && process.versions && !!process.versions.electron;
function print() {
    return __awaiter(this, void 0, void 0, function* () {
        const driver = require('printer');
        const defaultPrinter = driver.getPrinters().find(printer => printer.isDefault);
        let printer = new ThermalPrinter({
            type: PrinterTypes.EPSON,
            interface: `printer:${defaultPrinter.name}`,
            driver: driver
        });
        printer.alignCenter();
        printer.println("Hello world");
        printer.cut();
        try {
            let execute = printer.execute();
            console.log("Print done!");
        }
        catch (error) {
            console.error("Print failed:", error);
        }
    });
}
print();
