let entries = [];
const date = new Date();
let id = 0;

const renderIndex = (req, res) => {
    console.log(entries)
    res.render('index', {entries})
};

const renderNewEntry = (req, res) => {
    res.render('new-entry')
};

const createNewEntry = (req, res) => {
    const newEntry = {
        id: id++,
        title: req.body.title,
        content: req.body.body,
        cover: req.body.img,
        published: date.toLocaleString()
    };
    entries.push(newEntry);
    res.redirect('/');
};

const deleteEntry = (req, res) => {
    entries = entries.filter(e => e.id != req.params.id)
    res.redirect('/')

}

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    deleteEntry
}