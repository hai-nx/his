const datetimeHelper = {
    dateToNumber(date: Date): number {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const formattedNumber = `${year}${month < 10 ? '0' : ''}${month}${day < 10 ? '0' : ''}${day}${hours < 10 ? '0' : ''}${hours}${minutes < 10 ? '0' : ''}${minutes}${seconds < 10 ? '0' : ''}${seconds}`;

        return parseInt(formattedNumber);
    }
}

export default datetimeHelper;