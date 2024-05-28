export async function handleMedicalReportBase64(filelist: FileList) {
    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            resolve(reader.result);
          } else {
            reject(new Error("Failed to read file as Base64"));
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    const medicalReportBase64URI = await fileToBase64(filelist[0])
    const medicalReportBase64 = medicalReportBase64URI.replace('data:', '').replace(/^.+,/, '')

    return { medicalReportBase64 }
  }