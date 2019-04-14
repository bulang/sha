const index = new (require("./controllers/index"))();
module.exports={
    "GET:/": index.fn_index
}