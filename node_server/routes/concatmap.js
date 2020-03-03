exports.userlist = function (req, res) {  
   setTimeout(() => {
        res.send({data: 'userlist after 5 sec ' + req.params.id})
   }, 5000) 
};

exports.products = function (req, res) {  
    setTimeout(() => {
         res.send({data: 'products after 3 sec ' + req.params.id})
    }, 3000) 
};

exports.news = function (req, res) {  
    setTimeout(() => {
         res.send({data: 'news after 1 sec ' + req.params.id})
    }, 1000) 
 };