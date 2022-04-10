exports.wait = () => {
    return `*[❗] Please Wait...*`
}

exports.ok = () => {
    return `Done.`
}

exports.err = () => {
    return `*[❗] Fitur Sedang Tahap Perbaikan

Segera Lapor Bug Ke Owner*`
}

exports.emptyMess = () => {
    return `Masukkan Pesan.️`
}

exports.ownerOnly = () => {
    return `Owner Only.`
}

exports.doneOwner = () => {
    return `Done Bos.`
}

exports.groupOnly = () => {
    return `*[❗] Masuk grup dlu ngab cuma bisa di grup*`
}

exports.adminOnly = () => {
    return `*[❗]Command ini hanya bisa digunakan oleh admin grup*`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `User Bukan Seorang Admin!`
}

exports.adminAlready = () => {
    return ` Tidak  Dapat Mem-promote User Yang Merupakan Admin!️`
}

exports.botNotAdmin = () => {
    return `*[❗] Jadikan Bot Sebagai Admin*`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima Kasih Telah Melapor, Laporanmu Akan Kami Segera Terima.`
}

exports.videoLimit = () => {
    return `*[❗] Ukuran File Terlalu Besar*`
}

exports.notNum = (q) => {
    return `"${q}",*[❗] Bukan Angka*`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `
*┏━━━━━━━━━━━━━━━━━━*    
*┃┌────[ N A B L B O T Z ]────*
*┃│*
*┃│ ⫹⫺ Library : Baileys-Md*
*┃│ ⫹⫺ Version : 1.0.1*
*┃│ ⫹⫺ Language : Javascript*
*┃│ ⫹⫺ Author : NbilaBOTZ*
*┃│ ⫹⫺ Your Name : ${pushname}*
*┃│ ⫹⫺ Time : ${time}*
*┃│ ⫹⫺ Ucapan : Selamat ${salam}*
*┃│*
*┃╰────[ B O T - M D ]────*
*┗━━━━━━━━━━━━━━━━━━━*

*[   MAIN   ]*
 _❑   .menu / help_
 _❑   .runtime_
 _❑   .speed_

*[   INFO   ]*
 _❑   .owner_
 _❑   .rules_
 _❑   .donate_

*[   OWNER   ]*
 _❑   > evaluate_
 _❑   $ exec_
 _❑   .join *[Link]*_
 _❑   .setppbot (tag/send image)_
 _❑   .mode_
 _❑   .restart_
 _❑   .self_
 _❑   .public_
 _❑   .setmenu img/gif/loc_

*[   GROUP   ]*
 _❑   .revoke_
 _❑   .leave_
 _❑   .group (open/close)_
 _❑   .tagall (info)_
 _❑   .hidetag (text)_

*[   WEEBS   ]*
 _❑   .anime (query)_
 _❑   .manga (query)_
 _❑   .character (query)_

*[   MISC   ]*
 _❑   .film (query)_
 _❑   .wattpad (query)_
 _❑   .webtoons (query)_
 _❑   .drakor (query)_
 _❑   .pinterest (query)_

*[   TOOLS   ]*
 _❑   Coming Soon_
 
*[   SEARCH   ]*
 _❑   Coming Soon_
 
*[   DOWNLOADER   ]*
 _❑   .tiktok [Link]_
 _❑   .ytmp3 [Link]_
 _❑   .ytmp4 [Link]_
 _❑   .facebook [Link]_
 _❑   .twitter [Link]_
 _❑   .instagram [Link]_

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: SOFT BLOCK*

3. Bot di kick dari group.
Sanksi: *Tidak Bisa Masuk Lagi*

4. Gabisa makek? Gausah Salahin Bot
Sanksi: *Tolol*


    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

_Kalian Bisa Dukung Bot Lewat Donate Ke :_

 _》Top Indo : Chat Aku Ya kak jika ingin donasi:)_
 _》Gopay : Belum Ada_
 _》Pulsa : 089515233398 ( TRI 3 )_

_Donate Kalian Sangat Berarti._

_Contact person Owner:_
_wa.me/6289515233398_

    `
}
