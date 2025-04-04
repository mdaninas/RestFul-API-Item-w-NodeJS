import itemservice from "../service/item-service.js";
const additemControler = async (req, res, next) => {
  try {
    const user = req.user
    const hasil = await itemservice.additem(req.body,user);
    return res.status(200).json({
        data:hasil,
        message : "Item berhasil ditambahkan"
    })
  } catch (e) {
    next(e);
  }
};
const updateitem = async (req, res, next) => {
  try{
    const hasil = await itemservice.updateitem(req.params,req.body)
        return res.status(200).json({
            data:hasil,
            message : "Item berhasil diupdate"
        })

  }
  catch (e) {
    console.info(e);
    next(e);
  }
}
// const detailitem = async (req, res, next) => {

// };
// const deleteitem = async (req, res, next) => {

// };

export default {
    additemControler,
    updateitem
};
