export const loadPDFData = (response, filename) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", response.pdfDataURL);
        xhr.responseType = "arraybuffer";
        xhr.onload = function () {
            window.URL.revokeObjectURL(response.pdfDataURL);
            const blob = new Blob([xhr.response], { type: "application/pdf" });
            const pdfURL = window.URL.createObjectURL(blob);
            resolve({ pdfURL })
        };
        xhr.send();
    })

}