module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    proxy: "http://35.188.44.154/",
  },
};