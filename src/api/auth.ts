import request from "./request"
import { LoginParams } from "@/typings/auth"

export function login(data: LoginParams) {
  return request({
    url: "/login",
    method: "post",
    data
  })
}

export function getUserInfo() {
  return request({
    url: "/currentUser",
    method: "get"
  })
}
