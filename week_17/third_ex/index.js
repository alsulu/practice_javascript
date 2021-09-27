function formatDate(date) {
    let now = new Date();
    if (now - date < 1000)
        return "прямо сейчас";
    else if (now - date < 60*1000) {
        let sec = Math.floor((now - date) / 1000)
        return sec + " сек. назад";
    }
    else if (now - date < 60*60*1000) {
        let min = Math.floor((now - date) / (60 * 1000))
        return min + " мин. назад";
    }
    else {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear().toString().slice(-2);
        let hour = date.getHours();
        let minute = date.getMinutes();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        return `${day}.${month}.${year} ${hour}:${minute}`;
    }
}

alert(formatDate(new Date(new Date - 1)));

alert(formatDate(new Date(new Date - 38 * 1000)));

alert(formatDate(new Date(new Date - 6 * 60 * 1000)));

alert(formatDate(new Date(new Date - 30 * 60 * 60 * 1000)));
