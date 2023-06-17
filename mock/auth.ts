import { MockMethod } from "vite-plugin-mock"
export default [
  {
    url: "/api/currentUser",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        message: "ok",
        data: {
          name: "admin",
          avatar: "https://avatars.githubusercontent.com/u/17527871?s=60&v=4",
          userid: "00000001",
          email: ""
        }
      }
    }
  },
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      const { password, username } = body
      if (password === "123456" && username === "admin") {
        return {
          code: 200,
          message: "ok",
          data: {
            token: "123456789"
          }
        }
      } else {
        return {
          code: 401,
          message: "用户名或密码错误",
          data: {}
        }
      }
    }
  }
] as MockMethod[]
