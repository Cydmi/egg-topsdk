'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.app.topsdk.tmcClient.connect);
    this.ctx.body = 'hi, ' + this.app.plugins.topsdk.name;
  }
  async execute() {

    const data = new Promise((resolve, reject) => {
      this.app.topsdk.apiClient.execute('taobao.tbk.item.get', {
        fields: 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick',
        q: '女装',
        cat: '16,18',
      }, function(error, response) {
        if (!error) {
          resolve(response);
        } else reject(error);
      });
    });
    const result = await data;
    this.ctx.body = result;
  }
}

module.exports = HomeController;
