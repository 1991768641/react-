
import { get } from 'utils/http.js';

var a=async function(){
    let result = await get({
        url: '/api2/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe'
    })
    return result
}

module.exports= a()

