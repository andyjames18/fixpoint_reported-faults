// Toggle dropdown menu
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("dropdownToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (menuButton && dropdownMenu) {
    menuButton.addEventListener("click", () => {
      dropdownMenu.classList.toggle("show");
    });
  }

  // Simple protection already included via index.html password check
});

// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Export tables to Excel
function exportToExcel() {
  const tableIds = [
    "faultsTable",
    "waitingRepairTable",
    "repairCostsTable",
    "downtimeChart",
    "estimatedLossChart"
  ];

  const wb = XLSX.utils.book_new();

  tableIds.forEach(id => {
    const table = document.getElementById(id);
    if (table) {
      const ws = XLSX.utils.table_to_sheet(table);
      XLSX.utils.book_append_sheet(wb, ws, id.replace("Table", "").replace("Chart", ""));
    }
  });

  XLSX.writeFile(wb, "FixPoint_Engineer_Report.xlsx");
}
