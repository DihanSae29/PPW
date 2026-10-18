// 1. Inisialisasi State Data Mahasiswa (Single Source of Truth)
let dataMahasiswa = [
    {
        npm: "230101001",
        nama: "Ahmad Fauzi",
        program_studi: "Teknik Informatika",
        angkatan: 2023,
        email: "ahmad.fauzi@example.com"
    },
    {
        npm: "230101002",
        nama: "Siti Nurhaliza",
        program_studi: "Sistem Informasi",
        angkatan: 2023,
        email: "siti.nurhaliza@example.com"
    },
    {
        npm: "240101015",
        nama: "Budi Santoso",
        program_studi: "Teknologi Informasi",
        angkatan: 2024,
        email: "budi.santoso@example.com"
    }
];

// 2. Elemen Dom Utama.
const alertBox = document.getElementById("alert-box");


const formTambah = document.getElementById("form-tambah-mahasiswa");
const inputNpm = document.getElementById("npm");
const inputNama = document.getElementById("nama");
const selectProdi = document.getElementById("program_studi");
const inputAngkatan = document.getElementById("angkatan");
const inputEmail = document.getElementById("email");

const tabelBody = document.getElementById("tabel-body-mahasiswa");
const totalBadge = document.getElementById("total-mahasiswa-badge");
const totalInfo = document.getElementById("total-mahasiswa-info");

// 3. Fungsi Menampilkan Notifikasi Alert Interaktif (Percobaan 3-1).
function showAlert(message, type = "success") {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `alert-box alert-${type} show`

    setTimeout(() => {
        alertBox.className = `alert-box`;
    }, 4000)

    document.addEventListener(
        "DOMContentLoaded", function () {
            showAlert("Selamat Datang di Aplikasi SIMA!", "info");
        }
    )

    let dataMahasiswa = [
        {
            npm: "230101001",
            nama: "Ahmad Fauzi",
            program_studi: "Teknik Informatika",
            angkatan: 2023,
            email: "ahmad.fauzi@example.com"
        }, 
        {
            npm: "230101002",
            nama: "Siti Nurhaliza",
            program_studi: "Sistem Informasi",
            angkatan: 2023,
            email: "siti.nurhaliza@example.com"
        }, 
        {
            npm: "240101015",
            nama: "Budi Santoso",
            program_studi: "Teknologi Informasi",
            angkatan: 2024,
            email: "budi.santoso@example.com"
        }
    ];

    const alertBox = document.getElementById("alert-box");

    function showAlert(message, type = "success") {
        if (!alertBox) return;
        alertBox.textContent = message;
        alertBox.className = `alert-box alert-${type} show`;

        setTimeout(() => {
            alertBox.className = `alert-box`;
        }, 4000);
    }

    document.addEventListener("DOMContentLoaded", function () {
        showAlert("Selamat Datang di Sistem Informasi Data Mahasiswa (SIMA)!", 
            "info");
    })
}




// 4. Fungsi Pembaruan Counter Statistik Real-Time.
function updateCounter(displayedCount, totalCount = dataMahasiswa.length) {
    if (totalBadge) {
        totalBadge.textContent = totalCount;
    }
    if (totalInfo) {
        totalInfo.textContent = `Menampilkan ${displayedCount} dari 
        ${totalCount} mahasiswa.`;
    }
}

// 5. Fungsi Render Tabel ke DOM Secara Dinamis (Percobaan 3-2).

function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML = ""; // Clear existing table rows
    // Percobaan 3-2 langkah 6

    if (data.length === 0) {
       tabelBody.innerHTML = `
                            <tr>
                                <td colspan="8" class="empty-row">
                                    Tidak ada data mahasiswa yang tersedia.
                                </td>
                            </tr>`;
        // Percobaan 3-2 langkah 7
        updateCounter(0);
        return;
    }

    
    data.forEach((mhs, index) => {
        const tr = document.createElement("tr");
        
        // Percobaan 3-2 langkah 8
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <img src="img/avatar-default.svg" alt="Foto ${mhs.nama}" 
                class="avatar--img width="36" height="36">
            </td>
            <td><strong>${mhs.npm}</strong></td>
            <td>${mhs.nama}</td>
            <td>span class="badge">${mhs.program_studi}</span></td>
            <td>${mhs.angkatan}</td>
            <td><a href="mailto:${mhs.email}" class="link-email">${mhs.email}</a></td>
            <td>
                <button type="button" class="btn btn-danger btn-sm"
                onclick="hapusMahasiswa('${mhs.npm}')">Hapus</button>
            </td>
        `;
        

        // Percobaan 3-2 langkah 9
        tabelBody.appendChild(tr);
    });

    // Percobaan 3-2 langkah 10
    updateCounter(data.length);

    document.addEventListener("DOMContentLoaded", function () {
        renderTable(dataMahasiswa);
    })
}

// 6. Validasi Form Sisi Klien Menggunakan Regular Expression (Percobaan 3-3).
function validateForm(npm, nama, prodi, angkatan, email) {

    if (!/^[0-9]{8,12}$/.test(npm)) {
        return {
            isValid: false,
            messages: "NPM harus berupa angka dan memiliki panjang 8-12 digit."
        };
    }

    if (nama.trim().length < 3) {
        return {
            isValid: false,
            messages: "Nama harus memiliki panjang minimal 3 karakter."
        };
    }

    if (!prodi) {
        return {
            isValid: false,
            messages: "Program studi harus dipilih."
        };
    }

    const angk = parseInt(angkatan, 10);
    if (isNaN(angk) || angk < 2018 || angk > 2026) {
        return {
            isValid: false,
            messages: "Angkatan harus berupa angka antara 2018 dan 2026."
        };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
            isValid: false,
            messages: "Email tidak valid. (Contoh: user@example.com)"
        };
    }
        
    return {
        isValid: true, messages:""
    };
}


// 7. Event Handling Tambah Data Tanpa Reload (Percobaan 3-4).

if (formTambah) {
    formTambah.addEventListener("submit", function (event) {
        // Percobaan 3-4 Langkah 4
        event.preventDefault(); // Mencegah reload halaman saat submit form
        // Percobaan 3-4 Langkah 5

        const npm = inputNpm.value.trim();
        const nama = inputNama.value.trim();
        const prodi = inputProgramStudi.value;
        const angkatan = inputAngkatan.value.trim();
        const email =inputEmail.value.trim();

        const validation = validateForm(npm, nama, prodi, angkatan, email);

        if (!validation.isValid) {
            // Percobaan 3-4 Langkah 6
            showAlert(validation.messages, "danger");
        }

        // Percobaan 3-4 Langkah 7
        const mahasiswaBaru = {
            npm, 
            nama, 
            program_studi: prodi,
            angkatan: parseInt(angkatan, 10),
            email
        };

        daftarMahasiswa.push(mahasiswaBaru);


        // Percobaan 3-4 Langkah 8
        renderTable(daftarMahasiswa);
            formTambah.reset(); // Reset form setelah submit
            showAlert(`Data mahasiswa ${nama} (${npm}) berhasil ditambahkan!`, "success");
    });
}


// 8. Event Handling Hapus Data Mahasiswa (Percobaan 3-5).

function hapusMahasiswa(npm) {
    const mhs = dataMahasiswa.find(item => item.npm === npm);
    if (!mhs) return;

    const konfirmasi = confirm(`Apakah Anda yakin ingin menghapus data mahasiswa ${mhs.nama} (${mhs.npm})?`);
    if (konfirmasi) {
        dataMahasiswa = dataMahasiswa.filter(item => item.npm !== npm);
        renderTable(dataMahasiswa);
        showAlert(`Data mahasiswa ${mhs.nama} (${mhs.npm}) berhasil dihapus!`, "success");
    }

}


// 9. Fitur Pencarian Langsung Real-Time / Live Search (Percobaan 3-5)

if (inputSearch) {
    inputSearch.addEventListener("input", function () {
        const keyword = inputSearch.value.trim().toLowerCase();
        if (keyword === "") {
            renderTable(dataMahasiswa);
        } else {
            const hasilPencarian = dataMahasiswa.filter(mhs =>
                mhs.nama.toLowerCase().includes(keyword) ||
                mhs.npm.includes(keyword) ||
                mhs.prodi.toLowerCase().includes(keyword)
            );
            renderTable(hasilPencarian);
        }
    });
}

// Inisialisasi saat DOM selesai dimuat

document.addEventListener(
    
)
