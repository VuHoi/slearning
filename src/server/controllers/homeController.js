


module.exports=function(app){
    const items=[
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
    ]


    app.get('/',(req,res)=>{
        res.send("OK")
    })
    app.get('/allroom', (req, res) => {
            res.send(items);
      });
      app.post('/room',(req,res)=>{
        var room=req.body;
        items.push(room);
        res.end("yes")
      })


}