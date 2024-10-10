import Post from "../models/Post.js";

export const create = async (req, res) => {
  try {
    const doc = new Post({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      author: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate({
        //Функция populate() позволяет ссылаться на документы из других коллекций. https://my-js.org/docs/guide/mongoose/#популяция
        path: "author",
        select: ["fullname", "avatarUrl"],
      })
      .exec();

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось загрузить статьи",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await Post.findByIdAndUpdate(
      //Model.findByIdAndUpdate(id, обновление, параметры)
      { _id: postId }, //filter
      { $inc: { viewsCount: 1 } }, //increment
      { new: true } //вернуть обновлённый результат
    ).populate({
      path: "author",
      select: ["fullname", "avatarUrl"],
    });

    if (!doc) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось загрузить статью",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await Post.deleteOne({ _id: postId });

    if (!doc) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось удалить статью",
    });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;
    const doc = await Post.findByIdAndUpdate(
      { _id: postId },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags,
        author: req.userId,
      },
      { new: true }
    );

    if (!doc) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось обновить статью",
    });
  }
};

export const getLastTags = async (req, res) => {
  try {
    const posts = await Post.find().limit(5).exec(); //берём только последние 5 статей
    const tags = posts
      .map((post) => post.tags)
      .flat()//[[tags],[tags],[tags]]=>[tags,tags,tags]
      .slice(0, 5); //берем последние 5 тэгов из этих статей

    if(!tags) return res.status(404).json({message: 'Не удалось получить тэги'})
    res.json(tags);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить тэги",
    });
  }
};
