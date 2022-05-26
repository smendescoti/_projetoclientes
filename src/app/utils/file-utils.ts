export function downloadFile(
    data: any,
    type: string,
    filename: string
) {

    var blob = null;

    if (type == "pdf") {
        blob = new Blob([data], { type: "application/pdf" });
        filename += ".pdf";
    }
    else if (type == "excel") {
        blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        filename += ".xlsx";
    }

    if (blob != null) {

        var url = window.URL.createObjectURL(blob);

        var downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = filename;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}