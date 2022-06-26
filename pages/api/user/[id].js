import apidata from '../../../components/data'

export default function handler(req, res) {
    const {
        query: {id}
    } = req;
    res.status(200).json(apidata[id])
}