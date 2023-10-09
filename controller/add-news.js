import News from '../model/news.js';

export const news_adding = async (req, res) => {
  try {

    const system = {
        title: req.body.Title,
        author: req.body.Writer,
        description: req.body.Summary,
        url: req.body.image_url,
        timestamp: req.body.Time,
        link: req.body.I_URL,
        publisher: req.body.Publisher,
    };

    console.log(system);
    const newNews = new News({
      title: req.body.Title,
      author: req.body.Writer,
      description: req.body.Summary,
      url: req.body.image_url,
      timestamp: req.body.Time,
      link: req.body.I_URL,
      publisher: req.body.Publisher,
    });



    // Save the newNews document to the collection
    await newNews.save();

    console.log('Data imported Successfully');
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    console.error('Error:', error.message);
  }
};
