import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const hasil = await userService.register(req.body);
    res
      .status(200)
      .json({
        data: hasil,
        message: "Anda Telah Berhasil Mendaftar",
        status: 200,
      })
      .end();
  } catch (e) {
    next(e);
  }
};

const login = async (req,res,next) => {
  try {
    const hasil = await userService.login(req.body)
    res.status(200).json({
      data:hasil,
      message: "Anda Telah Berhasil Login",
      status: 200,
    })
  } catch (e) {
    next(e);
};
}
export default {
  register,
  login
};
