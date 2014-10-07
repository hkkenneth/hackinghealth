var request = require('request');

// hard coded access token for updating a page 
var mapping = {
'糖尿病' : "CAAFQZCNZCHyxkBABpAQ6SZCBjZBzDQtCVSXlZCyu4Xm42NTVNHuhbh61HqgQwLKmCwkc0O12ZA8L7dkCjLzNl4WZBncpGqmZBVghTjqj9v2w3HiFqgC1Ovc6bt1ot7ZASOF0u6sJHZCsyOT6ESd2CwzrDha7VEIaZA9ijUCbdjeaLTB0vY0CvfYl9wf",
'長者' : "CAAFQZCNZCHyxkBAGlIGzKDXN8EOTcPHKAYn0fmMiwn5Xjc8hvyJ6p5RL3owjrY9cYweVUHpcoCqMNb0VmxIPZBNfG4BcVc1hHtu34OR0xP1t7PlT7ww4kjgZCGUYW2do2oMaiGZAZBTpu9sU7Ytovdz1T1oCpAGdc7B6lo7UZBZCs1lVuDBC57ZAe",
'心臟' : "CAAFQZCNZCHyxkBAKhiNZCsPCZCX0tlvCM1lyluVF1rubHW4GfCLjXIaDzZAipeYBLmJsv8OBP2XeOWlENokisoE79usfkhM6XBwiu5seHVZBKj2gNnmZA0ZBsxgL1SMHpbasqOuksnZAWgSOYR1aZB710mXWZBB7mUz3ikP6rIf4z3xFqhN59RVVcM4"
}

// JSON output of the spreadsheet result
request('https://script.googleusercontent.com/macros/echo?user_content_key=pGWGrzOgstYSV3G1EIYbQkzCT3xFlj8UvD17IR-kC3-Rz-xpCtOcPpoeclebPH9VuOezLXyawadoQZ5BroWgsaSa3rRzugwrOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa3GaoauzAMbF001i6RBWVb-ahx4EiaaV5fSJzo-0WxE6LvjOUOM7LAmIGuV_AbfFrj0-L2Dqk3c87Hotbouu6tap6XAcKZqNEvGQLsmst4g0_3zO0s2HpavwKTzqndR166l559AUt5ooNAm_wNdZrWHpjKdGh0jXiILUVgQmUa08&lib=M0klXLQOsKcIM4m86X8_CevqWUX6-vu4W', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    obj = JSON.parse(body);
    
    // Form Responses 1 is the sheet name
    arr = obj['Form Responses 1'];
    for (i = 0; i < arr.length ; i++) {
       el = arr[i];
       accessToken = mapping[el.Topics];
       // Call facebook API
       request.post('https://graph.facebook.com/v2.1/feed', {form:{'access_token':accessToken, 'link':el['Source_URL'], 'message': el['Summary']}});
    }
  }
})
