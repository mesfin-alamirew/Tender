import dbConnect from '../../../util/mongo';
import Post from '../../../models/Post';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  //   const token = cookies.token

  dbConnect();

  if (method === 'GET') {
    try {
      const post = await Post.findById(id);

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'PUT') {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const post = await Post.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'DELETE') {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      await Post.findByIdAndDelete(id);
      res.status(200).json('The post has been deleted!');
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
