import {put} from 'redux-saga/effects';
import {get} from 'utils/http.js';
import {LOADDATA,ClASSDATA} from 'pages/action-type.js';
import fetchjsonp from 'fetch-jsonp';

function* loadData(action) {
  try {
    const result = yield get({
      url: '/api2/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe'
    })

    const newdata={
      swpierlist: result.adsInfo.slide_ads.config.slide,
      hotlist:result.adsInfo.block[0].multi_block[0].data,
      banner0:result.adsInfo.block[0].multi_block[1].data,
      banner1:result.adsInfo.block[0].multi_block[2].data,
      banner2:result.adsInfo.block[0].multi_block[3].data,
      banner3:result.adsInfo.block[0].multi_block[4].data
    }
    yield put({
      type: LOADDATA,
      data: newdata
    });
  } catch (e) {

  }
}

function* classdata(action) {
      const classlist=[];
      const api="https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=15615615&callback=jsonp1";
      fetchjsonp(api).then((res)=>{
          
      }).then((res)=>{
        return res.json();
        classlist=res;
        
      }).catch((err)=>{      
      });
      // console.log(result)
      
      yield put({
        type: ClASSDATA,
        data: classlist
      });
}


export {
  loadData as action,
  classdata as classaction
}