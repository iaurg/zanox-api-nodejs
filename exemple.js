/**
 * Zanox API interface for Node.js
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 * @see https://marketplace.zanox.com/publisher-signup (Create account)
 * @see https://developer.zanox.com/blog?p_p_id=148_INSTANCE_n5kwq91nKP5Y&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=1&p_r_p_564233524_tag=publisher+api&p_r_p_564233524_resetCur=true (Generate connectid and secretkey)
 */

"use strict";

let Zanox = require("./index.js"),
    zanox = new Zanox("connectid", "secretkey");//Token de afiliação

/*zanox.programs({region: "BR"}, function(err, result){
  console.log(result.programItems.programItem);
});*/

/*zanox.programapplications({region: "BR"}, function(err, result){
  console.log(result.programApplicationItems.programApplicationItem);
});*/