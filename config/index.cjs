/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx790ca09ca7f18bf9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '78350f28c9b8a12952f35ae62e0a0fdf',

  PROVINCE: '广东',
  CITY: '广州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRcfp69jFSWeM1HoXcXuwXckLwoc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'qQc9mdhqigHpgildHDW4jF537nREtw8yVq8XIjfSlVk',
      festivals: [
        {
          type: '*生日', name: '我家宝宝', year: '2004', date: '09-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '我家宝宝', year: '2004', date: '09-18', isShowAge: true,
        },
        {
          type: '节日', name: '我们恋爱一周年', year: '2024', date: '01-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子，不明原因计算多一天，故从1.19手动加多一天
        { keyword: 'love_day', date: '2024-01-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'zGgikJE_RuvWaOP6OPrwiaTTeWX_n-maaUUa2Mkwza0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRcfp63U0krS62syvkzqQqQbmusk',
    }
  ],

}

module.exports = USER_CONFIG

