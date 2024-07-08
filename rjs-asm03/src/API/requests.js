// url chứa dữ liệu của trang web
const url = 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'

// Hàm chuyển đổi format của dữ liệu từ string sang tiền tệ
const converseNum = (str) => {
    const number = Number(str);
    const resultFormat = new Intl.NumberFormat('vi-VN').format(
        number,
    )

    return resultFormat;
}

export { url, converseNum };