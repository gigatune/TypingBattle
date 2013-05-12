
/*
 * GET home page.
 */

exports.test = function(req, res){
    res.render('test', { title: 'Express',
			 host : req.headers.host,
			 qid : req.params['qid']
			 });
};
