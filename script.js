const downloadBtn = document.getElementById("downloadPdfBtn");

downloadBtn.addEventListener("click", () => {

    const nama =
        document.getElementById("participantNama")?.innerText || "";

    const nim =
        document.getElementById("participantNim")?.innerText || "";

    const kelas =
        document.getElementById("participantKelas")?.innerText || "";

    const foto =
        document.getElementById("participantFoto")?.src || "";

    // simpan data
    localStorage.setItem("participant_nama", nama);
    localStorage.setItem("participant_nim", nim);
    localStorage.setItem("participant_kelas", kelas);
    localStorage.setItem("participant_foto", foto);

    // buka generator pdf
    window.open("print.html", "_blank");

});