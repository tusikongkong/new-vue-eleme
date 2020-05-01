// const express = require('express')
// const app = express()
// const appData = require('./data.json')
// const seller = appData.seller
// const goods = appData.goods
// const ratings = appData.ratings
// const apiRoutes = express.Router()
// app.use('/api', apiRoutes)

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  },
  devServer: {
    // before (app) {
    //   app.get('/api/seller', (req, res) => {
    //     res.json({
    //       errno: 0,
    //       data: seller
    //     })
    //   })
    //   app.get('/api/goods', (req, res) => {
    //     res.json({
    //       errno: 0,
    //       data: goods
    //     })
    //   })
    //   app.get('/api/ratings', (req, res) => {
    //     res.json({
    //       errno: 0,
    //       data: ratings
    //     })
    //   })
    // },
    disableHostCheck: true
  }
}
