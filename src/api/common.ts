import request from "@/utils/request";

export const loginApi = (data: { username: string }) => {
  request({
    url: "login",
    method: "post",
    data,
  });
};
