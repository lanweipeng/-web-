const Router = require('koa-router');
const re = require('../../lib/re')
const guid = require('uuid/v4')
const config = require('../../config')
let router = new Router();
router.get('/account_catalog', async ctx => {
    ctx.body = ['娱乐', '汽车', '情感', '美食', '时尚']
})
router.get('/catalog/:parent', async ctx => {
    let { parent } = ctx.params
    console.log(parent)
    ctx.body = await ctx.db.query("SELECT ID,title FROM catalog_table where parentID =?", parent)
})
router.get('/publish_catalog', async ctx => {
    ctx.body = ['人工智能', '人文', '教育', '汽车', '游戏', '财经', '要闻', '萌宝', '艺术', '育儿', '职场',
        '美女',
        '科技',
        '生活',
        '社会',
        '星座',
        '时尚',
        '旅游',
        '数码',
        '故事',
        '搞笑',
        '探索',
        '手机',
        '房产',
        '彩票',
        '小品',
        '明星',
        '家居'
    ]
})



router.get('/get_province', async ctx => {
    ctx.body = await ctx.db.query("select * from province")
})
router.get('/get_city/:proid/', async ctx => {
    let { proid } = ctx.params;
    ctx.body = await ctx.db.query("select * from city where proID=?", proid)

})
router.post('/reg', async ctx => {
    let post = ctx.request.fields;
    console.log(post);
    // if (!re.email.test(post['email'])) {
    //     ctx.body = { err: 1, msg: 'email incorrect' }
    // } else {
    //     console.log(post['display_name']);
    await ctx.db.query("INSERT INTO user_table (email) VALUES(?)", post['email']
            // "insert into user_table (ID,email,password,type,slogan,catalog,icon,description,other_channels,name,identify_number,province,city,qq_wx,recommend_code,token,token_expires) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", ['2', post['email'], post['password'], post['type'], post['slogan'], post['catalog'], post['icon'], post['description'], post['other_channels'], post['name'], post['identify_number'], post['province'], post['city'], post['qq_wx'], post['recommend_code'], '', 0]
        )
        // }
        // ctx.body = { err: 0 }

})
router.post('/login', async ctx => {
    let { email, password } = ctx.request.fields;
    let rows = await ctx.db.query(
        "select * from user_table where email=?", [email]
    )
    let token;
    if (rows.length == 0) {
        ctx.body = { err: 1, msg: 'not this user' }
    } else {
        let row = rows[0];

        if (row['password'] !== password) {
            ctx.body = { err: 1, msg: 'password' }
        } else {
            token = guid().replace(/\-/g, '')
            token_expires = Math.floor(Date.now() + config.TOKEN_AGE) / 1000
            await ctx.db.query('UPDATE user_table set token=?,token_expires=?', [token, token_expires])
            ctx.body = { err: 0, token }
        }
    }
})
router.post('/publish', async ctx => {
    let post = ctx.request.fields;
    let token = post['token'];
    let rows = await ctx.db.query('select id,token_expires from user_table where token=?', [token])
    if (!rows.length) {
        ctx.body = { err: 1, msg: 'need login' }
    } else {
        let { ID, token_expires } = rows[0]
        let now = Math.floor(Date.now() / 1000);
        console.log(now, token_expires)
        if (now > token_expires) {
            ctx.body = { err: 1, msg: 'token expires' }
        } else {
            //验证
            let ID = guid().replace(/\-/g, '')
            await ctx.db.query("insert into article_table (title,content,catalogs,cover,userID,post_time,review)  values(?,?,?,?,?,?,?)", [post['title'], post['content'],
                ['catalogs'],
                ['cover'], ID, now, 0
            ]);
            ctx.body = { err: 0 }
        }
    }
})

module.exports = router.routes();