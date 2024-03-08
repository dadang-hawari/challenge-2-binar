const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 203,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const idrFormatter = (currency) =>
  currency.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

const getInfoPenjualan = (data) => {
  let bukuTerlaris = "",
    penulisBukuTerlaris = "",
    totalTerlarisTerjual = 0;
  let temp = 0,
    keuntungan = 0,
    totalPembelian = 0,
    persentaseKeuntungan = 0;

  const penulisTerlaris = data.reduce((acc, { penulis, totalTerjual }) => {
    acc[penulis] = (acc[penulis] || 0) + totalTerjual;
    return acc;
  }, {});

  Object.entries(penulisTerlaris).forEach(([penulis, totalTerjual]) => {
    if (totalTerjual > totalTerlarisTerjual) {
      penulisBukuTerlaris = penulis;
      totalTerlarisTerjual = totalTerjual;
    }
  });

  data.forEach(
    ({ namaProduk, totalTerjual, hargaJual, hargaBeli, sisaStok }) => {
      if (totalTerjual > temp) {
        bukuTerlaris = namaProduk;
        temp = totalTerjual;
      }

      totalPembelian += (totalTerjual + sisaStok) * hargaBeli;
      keuntungan += (hargaJual - hargaBeli) * totalTerjual;
    }
  );

  persentaseKeuntungan = (keuntungan / totalPembelian) * 100;
  return {
    totalKeuntungan: idrFormatter(keuntungan),
    totalModal: idrFormatter(totalPembelian),
    persentaseKeuntungan: `${persentaseKeuntungan.toFixed(2)}%`,
    produkBukuTerlaris: bukuTerlaris,
    penulisTerlaris: penulisBukuTerlaris,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
