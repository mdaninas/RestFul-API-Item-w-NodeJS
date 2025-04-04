import itemservice from "../service/item-service.js";
const additemControler = async (req, res, next) => {
  try {
    const user = req.user;
    const hasil = await itemservice.additem(req.body, user);
    return res.status(200).json({
      data: hasil,
      message: "Item berhasil ditambahkan",
    });
  } catch (e) {
    next(e);
  }
};
const updateitem = async (req, res, next) => {
  try {
    const hasil = await itemservice.updateitem(req.params, req.body);
    return res.status(200).json({
      data: hasil,
      message: "Item berhasil diupdate",
    });
  } catch (e) {
    next(e);
  }
};
const detailitem = async (req, res, next) => {
  const id = req.params.id;
  try {
    const hasil = await itemservice.detailitem(id, req.body);
    return res.status(200).json({
      data: hasil,
      message: `Detail item ${hasil.id}`,
    });
  } catch (e) {
    next(e);
  }
};
const deleteitem = async (req, res, next) => {
  const id = req.params.id;
  try {
    const hasil = await itemservice.deleteitem(id, req.body);
    return res.status(200).json({
      message: `Item ${hasil.id} berhasil dihapus`,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  additemControler,
  updateitem,
  detailitem,
  deleteitem
};
