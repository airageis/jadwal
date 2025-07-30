const scheduleData = {
  "Senin": [
    { jam: "06:30 - 07:00", pelajaran: "Upacara", guru: "-" },
    { jam: "07:00 - 08:00", pelajaran: "Matematika", guru: "Bu Sari" },
    { jam: "08:00 - 09:00", pelajaran: "Bahasa Indonesia", guru: "Pak Budi" },
    { jam: "09:00 - 09:30", pelajaran: "Istirahat", guru: "-" },
    { jam: "09:30 - 10:30", pelajaran: "IPA", guru: "Bu Tika" },
    { jam: "10:30 - 11:30", pelajaran: "IPS", guru: "Pak Rio" },
    { jam: "11:30 - 12:00", pelajaran: "Piket", guru: "Kelas A" },
  ],
  "Selasa": [
    { jam: "07:00 - 08:00", pelajaran: "Bahasa Inggris", guru: "Miss Nina" },
    { jam: "08:00 - 09:00", pelajaran: "Seni Budaya", guru: "Pak Adit" },
    { jam: "09:00 - 09:30", pelajaran: "Istirahat", guru: "-" },
    { jam: "09:30 - 10:30", pelajaran: "Matematika", guru: "Bu Sari" },
    { jam: "10:30 - 11:30", pelajaran: "Penjaskes", guru: "Pak Joko" },
    { jam: "11:30 - 12:00", pelajaran: "Piket", guru: "Kelas B" },
  ],
  "Rabu": [
    { jam: "07:00 - 08:00", pelajaran: "PKN", guru: "Bu Ningsih" },
    { jam: "08:00 - 09:00", pelajaran: "IPA", guru: "Bu Tika" },
    { jam: "09:00 - 09:30", pelajaran: "Istirahat", guru: "-" },
    { jam: "09:30 - 10:30", pelajaran: "Bahasa Indonesia", guru: "Pak Budi" },
    { jam: "10:30 - 11:30", pelajaran: "TIK", guru: "Bu Lilis" },
    { jam: "11:30 - 12:00", pelajaran: "Piket", guru: "Kelas C" },
  ],
  "Kamis": [
    { jam: "07:00 - 08:00", pelajaran: "Matematika", guru: "Bu Sari" },
    { jam: "08:00 - 09:00", pelajaran: "Agama", guru: "Pak Ustadz" },
    { jam: "09:00 - 09:30", pelajaran: "Istirahat", guru: "-" },
    { jam: "09:30 - 10:30", pelajaran: "Bahasa Inggris", guru: "Miss Nina" },
    { jam: "10:30 - 11:30", pelajaran: "Kewirausahaan", guru: "Bu Sinta" },
    { jam: "11:30 - 12:00", pelajaran: "Piket", guru: "Kelas D" },
  ],
  "Jumat": [
    { jam: "07:00 - 08:00", pelajaran: "Pendidikan Karakter", guru: "Pak Wira" },
    { jam: "08:00 - 09:00", pelajaran: "Bahasa Daerah", guru: "Bu Lestari" },
    { jam: "09:00 - 09:30", pelajaran: "Istirahat", guru: "-" },
    { jam: "09:30 - 10:30", pelajaran: "TIK", guru: "Bu Lilis" },
    { jam: "10:30 - 11:30", pelajaran: "Penjaskes", guru: "Pak Joko" },
    { jam: "11:30 - 12:00", pelajaran: "Piket", guru: "Kelas E" },
  ]
};

const scheduleContainer = document.getElementById('schedule-container');
const buttons = document.querySelectorAll('.tab-btn');

function renderSchedule(day) {
  const data = scheduleData[day];
  let html = `
    <h2>Jadwal Hari ${day}</h2>
    <table class="schedule-table">
      <tr>
        <th>Jam</th>
        <th>Pelajaran</th>
        <th>Guru</th>
      </tr>
  `;
  data.forEach((item) => {
    html += `
      <tr>
        <td>${item.jam}</td>
        <td>${item.pelajaran}</td>
        <td>${item.guru}</td>
      </tr>
    `;
  });
  html += "</table>";
  scheduleContainer.innerHTML = html;
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSchedule(btn.dataset.day);
  });
});

// Default load
renderSchedule('Senin');