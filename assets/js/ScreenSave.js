var element = document.getElementById('TMRForm');
var opt = {
  margin:       1,
  filename:     'Form.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { width: 1100, height: 1050, scale:1 },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

function downloadPDF() {
    html2pdf(element, opt);
}