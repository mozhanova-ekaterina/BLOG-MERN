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

    let doc = await Post.findByIdAndUpdate(
      { _id: postId }, //filter
      { $inc: { viewsCount: 1 } }, //increment
      { new: true } //вернуть обновлённый результат
    ).populate({
      path: "author",
      select: ["fullname", "avatarUrl"],
    });

    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось загрузить статью",
    });
  }
};

// let doc = await PostModel.findOneAndUpdate(
//   { _id: postId },
//   { $inc: { viewsCount: 1 } }
// );
