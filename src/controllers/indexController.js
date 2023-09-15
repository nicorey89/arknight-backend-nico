module.exports = {
    index: async (req, res) => {
        const [data] = await pool.query('SELECT * FROM railway')
        res.json(data)
    }
}