import axios from "axios";

axios.get("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0")
.then((res) => {
    let None = [], Rain = [];
    for (let i = 0; i < res.data.dataseries.length; i++)
    {
        if (res.data.dataseries[i].prec_type == 'None')
        {
            None.push(res.data.dataseries[i].prec_type);
        }
        else
        {
            Rain.push(res.data.dataseries[i].prec_type);
        }
    }
})