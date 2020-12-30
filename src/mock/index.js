const Mock = require("mockjs");
const { Random } = Mock

module.exports = function(app) {
  const userList = () => {
    const total = 33
    return (req, res) => {
      console.log(req.query)
      res.json(
        Mock.mock({
          code: 0,
          data: {
            total,
            "data|10": [
              {
                "id|+1": 1,
                date: Random.date('yyyy-MM-dd'),
                name: Random.cparagraph(3, 4),
                province: Random.cparagraph(2, 5),
                city: Random.cparagraph(2, 5),
                address: Random.cparagraph(),
                zip: 200333,
                tag: Math.random() > .5 ? "家" : "公司",
              },
            ]
          },
        })
      );
    }
  }
  // 监听请求
  app
    .get("/use-mock", (req, res) => {
      console.log(req.url);
      setTimeout(() => {
        res.json(
          Mock.mock({
            code: 0,
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            "list|1-10": [
              {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                "id|+1": 1,
                img: Random.image("200x100", "#4A7BF7", "Hello"),
              },
            ],
          })
        );
      }, 500);
    })

    .get("/test", (req, res) => {
      console.log(req.url);
      setTimeout(() => {
        res.statusCode = 500;
        res.json(Mock.mock({ code: -1, msg: "请求错误" }));
      }, 3000);
    })

    .get("/list", (req, res) => {
      console.log(req.url, req.query);
      const type = req.query.type;

      if (+type === 1) {
        setTimeout(() => {
          res.json(
            Mock.mock({
              code: 0,
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              "data|1-10": [
                {
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                  "id|+1": 1,
                  title: "列表一" + parseInt(Math.random() * 10 + 100),
                },
              ],
            })
          );
        }, 3000);
      } else {
        res.json(
          Mock.mock({
            code: 0,
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            "data|1-10": [
              {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                "id|+1": 1,
                title: "列表二" + parseInt(Math.random() * 10 + 100),
              },
            ],
          })
        );
      }
    })

    .get("/user-list", userList());
};
