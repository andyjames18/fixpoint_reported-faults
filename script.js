document.addEventListener("DOMContentLoaded", () => {
  const faultsTable = document.querySelector("#faultsTable tbody");

  // Simulated data (replace with Supabase data fetch)
  const sampleFaults = [
    { date: "2025-06-30", machine: "60086 - COOL SCOOP", description: "Screen not responding", reportedBy: "John", status: "Incomplete" },
    { date: "2025-06-29", machine: "63217 - DOUBLE PONY", description: "Power not coming on", reportedBy: "Sarah", status: "Complete" }
  ];

  sampleFaults.forEach(fault => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${fault.date}</td>
      <td>${fault.machine}</td>
      <td>${fault.description}</td>
      <td>${fault.reportedBy}</td>
      <td>${fault.status}</td>
    `;
    faultsTable.appendChild(row);
  });
});

function exportToExcel() {
  alert("Export to Excel functionality would trigger here.");
}
