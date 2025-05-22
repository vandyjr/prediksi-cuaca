export const cekInput = (suhu) => {                                   
                                                                      

    if (typeof suhu !== "string") {
        return "Invalid input: Harus berupa string.";
    }

    const suhuNum = parseFloat(suhu);

    if (isNaN(suhuNum)) {
        return "Invalid input: Harus berupa angka dalam bentuk string.";
    }

    return suhuNum;
};

export const prediksiCuaca = (suhu) => {                  
                                                          
    const suhuNum = cekInput(suhu);

    if (typeof suhuNum === "string") {
        return suhuNum;
    }

    return 'Cuaca ${suhuNum < 0 ? "dingin" : suhuNum <= 25 ? "sedang" : "panas"}, suhu: ${suhuNum}°C';
};