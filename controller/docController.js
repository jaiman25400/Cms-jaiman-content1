const docsModel = require("../schema/docsSchema").docsModel;

module.exports.getDocByModelName = async (req, res) => {
    try {
        const modelName = req.params.modelName
        const data = await docsModel.find({ modelName: modelName });
        res.send(data)
    } catch {
        res.sendStatus(500);
    }
}

module.exports.getDocByModelNameAndID = async (req, res) => {
    try {
        const modelName = req.params.modelName
        const id = req.params.id
        console.log('params',req.params)
        const data = await docsModel.find({ modelName: modelName,_id: id });
        res.send(data)
    } catch {
        res.sendStatus(500);
    }
}

module.exports.addData = async (req, res) => {
    const modelName = req.params.modelName
    const modelId = req.model_id
    const data = req.body.data
    await docsModel.create({ modelName, model: modelId, data });
    res.send("Document Created SuccesFully")
};

module.exports.updateData = async (req, res) => {
    const docId = req.params.docId
    const data = JSON.parse(req.body.data)
    await docsModel.findByIdAndUpdate(
        { _id: docId },
        { $set: { "data": data } }
    );
    res.send("Document Updated Successfully")
};

module.exports.deleteData = async (req, res) => {
    const docId = req.params.docId
    await docsModel.findByIdAndDelete(docId);
    res.send("Document Deleted Sucessfully")
}
