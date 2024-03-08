const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const getTotalPenjualan = (penjualan) => {
  if (penjualan) {
    if (Array.isArray(penjualan) && penjualan.length > 0) {
      const total = penjualan.reduce((sum, item) => sum + item.totalTerjual, 0);
      return `Total penjualan: ${total} dengan tipe data ${typeof total}`;
    }
    return "Error: invalid parameter";
  }
  return "Error: where is the parameter?";
};

console.log(getTotalPenjualan(dataPenjualanPakAldi));
console.log(getTotalPenjualan());
console.log(getTotalPenjualan(0));
console.log(getTotalPenjualan(null));
console.log(getTotalPenjualan([]));
console.log(getTotalPenjualan("a"));
