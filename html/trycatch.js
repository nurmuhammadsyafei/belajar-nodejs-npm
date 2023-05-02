try {
    // Blok kode yang mungkin menghasilkan kesalahan
    let x = 1 / 0; // Ini akan menghasilkan kesalahan
} catch (error) {
    // Blok kode yang akan dieksekusi jika kesalahan terjadi
    console.log("Terjadi kesalahan: " + error);
} finally {
    // Blok kode yang akan dieksekusi setelah blok try dan catch selesai dieksekusi
    console.log("Program selesai");
}




