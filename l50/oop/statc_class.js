class TaxClass{

   static addVat = (_price) => {
    return _price * 1.17
  }
}

// without static
// let tax = new TaxClass()
// tax.addVat(100)

TaxClass.addVat(100);