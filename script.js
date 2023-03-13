let nama,
  namaLengkap,
  hasilJumlah,
  hasilKurang,
  hasilKali,
  hasilBagi,
  hasilMod,
  nilaiSegitiga,
  nilaiPersegi,
  nilaiPpanjang,
  nilaiTrapesium,
  nilaiJajarGenjang,
  nilaiLayang,
  nilaiLingkaran,
  nilaiKubus,
  nilaiBalok,
  nilaiKrucut,
  nilaiTabung,
  nilaiBola,
  nilaiLimas,
  nilaiPrisma;

function setNama(argNama) {
  nama = argNama;
}
function getNama() {
  return nama;
}
function setNamaLengkap(namaDepan, namaBelakang) {
  namaLengkap = namaDepan + " " + namaBelakang;
}
function getNamaLengkap() {
  return namaLengkap;
}
function setJumlah(a, b) {
  hasilJumlah = a + b;
}
function getJumlah() {
  return hasilJumlah;
}
function setKurang(a, b) {
  hasilKurang = a - b;
}
function getKurang() {
  return hasilKurang;
}
function setKali(a, b) {
  hasilKali = a * b;
}
function getKali() {
  return hasilKali;
}
function setBagi(a, b) {
  hasilBagi = a / b;
}
function getBagi() {
  return hasilBagi;
}
function setMod(a, b) {
  hasilMod = a % b;
}
function getMod() {
  return hasilMod;
}
function setSegitiga(a, t) {
  nilaiSegitiga = (a * t * 1) / 2;
}
function getSegitiga() {
  return nilaiSegitiga;
}
function setPersegi(s) {
  nilaiPersegi = s * s;
}
function getPersegi() {
  return nilaiPersegi;
}
function setPpanjang(p, l) {
  nilaiPpanjang = p * l;
}
function getPpanjang() {
  return nilaiPersegi;
}
function setTrapesium(a, b, t) {
  nilaiTrapesium = ((a + b) * t) / 2;
}
function getTrapesium() {
  return nilaiTrapesium;
}
function setJajarGenjang(a, t) {
  nilaiJajarGenjang = a * t;
}
function getJajarGenjang() {
  return nilaiJajarGenjang;
}
function setLayang(d1, d2) {
  nilaiLayang = (d1 * d2 * 1) / 2;
}
function getLayang() {
  return nilaiLayang;
}
function setLingkaran(pi, r) {
  nilaiLingkaran = r * r * pi;
}
function getLingkaran() {
  return nilaiLingkaran;
}
function setKubus(r) {
  nilaiKubus = r * r * r;
}
function getKubus() {
  return nilaiKubus;
}
function setBalok(p, l, t) {
  nilaiBalok = p * l * t;
}
function getBalok() {
  return nilaiBalok;
}
function setKrucut(pi, r, t) {
  nilaiKrucut = (r * r * t * pi * 1) / 3;
}
function getKrucut() {
  return nilaiKrucut;
}
function setTabung(pi, r, t) {
  nilaiTabung = r * r * t * pi;
}
function getTabung() {
  return nilaiTabung;
}
function setBola(pi, r, t) {
  nilaiBola = (r * r * r * pi * 4) / 3;
}
function getBola() {
  return nilaiBola;
}
function setLimas(a, b, t) {
  nilaiLimas = (a * b * t * 1) / 6;
}
function getLimas() {
  return nilaiLimas;
}
function setPrisma(a, b, t) {
  nilaiPrisma = (a * b * t * 1) / 6;
}
function getPrisma() {
  return nilaiPrisma;
}
setNama("iwal");
console.log("Nama = ", getNama());

setNamaLengkap("iwal", "faizul");
console.log("Nama Lengkap = ", getNamaLengkap());

setJumlah(10, 5);
console.log("Hasil Jumlah = ", getJumlah());

setKurang(10, 5);
console.log("Hasil Kurang = ", getKurang());

setKali(10, 5);
console.log("Hasil Kali = ", getKali());

setBagi(10, 5);
console.log("Hasil Bagi = ", getBagi());

setMod(10, 5);
console.log("Hasil Modulus = ", getMod());

setSegitiga(5, 2);
console.log("Luas Segitiga = ", getSegitiga());

setPersegi(4);
console.log("Luas Persegi = ", getPersegi());

setPpanjang(8, 5);
console.log("Luas P. Panjang = ", getPpanjang());

setTrapesium(2, 8, 4);
console.log("Luas Trapesium = ", getTrapesium());

setJajarGenjang(4, 9);
console.log("Luas Jajar Genjang = ", getJajarGenjang());

setLayang(12, 6);
console.log('Luas Layang" = ', getLayang());

setLingkaran(25, 5);
console.log("Luas Lingkaran = ", getLingkaran());

setKubus(5);
console.log("Volume Kubus = ", getKubus());

setBalok(10, 5, 20);
console.log("Volume Balok = ", getBalok());

setKrucut(10, 5, 20);
console.log("Volume Krucut = ", getKrucut());

setTabung(10, 5, 20);
console.log("Volume Tabung = ", getTabung());

setBola(4, 8, 16);
console.log("Volume Bola = ", getBola());

setLimas(4, 8, 16);
console.log("Volume Limas = ", getLimas());

setPrisma(4, 8, 16);
console.log("Volume Prisma = ", getPrisma());
