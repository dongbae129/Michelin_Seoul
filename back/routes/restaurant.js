const express = require("express");
const db = require("../models");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, basename + new Date().valueOf() + ext);
  },
});

const upload = multer({ storage: storage });

function removeDuplicatesArray(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr.length === 0) {
      tempArr.push(arr[i]);
    } else {
      let duplicatesFlag = true;
      for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j].name === arr[i].name) {
          duplicatesFlag = false;
          break;
        }
      }
      if (duplicatesFlag) {
        tempArr.push(arr[i]);
      }
    }
  }
  return tempArr;
}

router.post("/", upload.none(), async (req, res) => {
  try {
    const restaurant = await db.Restaurant.findOne({
      where: { name: req.body.name },
    });
    if (restaurant) {
      return res.status(404).send("해당 업체는 이미 등록되어 있습니다.");
    }
    const newRestaurant = await db.Restaurant.create({
      name: req.body.name,
      star: req.body.star,
      foodtype: req.body.type,
      tag: req.body.tag,
    });
    await db.DetailInfo.create({
      description: req.body.descrip,
      location: req.body.location,
      phonenumber: req.body.phoneNum,
      weekday: req.body.weekday,
      weekend: req.body.weekend,
      RestaurantId: newRestaurant.id,
    });
    if (req.body.imagePaths) {
      await Promise.all(
        req.body.imagePaths.map((v) => {
          return db.Image.create({ src: v, RestaurantId: newRestaurant.id });
        })
      );
      // await newRestaurant.addImages(images);
      // const images = await req.body.imagePaths.map((v, i) => {
      //   return db.Image.create({
      //     src: v,
      //     RestaurantId: newRestaurant.id,
      //   });
      // });
    }
    const sendRestaurant = await db.Restaurant.findOne({
      where: { id: newRestaurant.id },
      include: [
        {
          model: db.Image,
        },
        {
          model: db.DetailInfo,
        },
      ],
    });
    res.status(200).json(sendRestaurant);
  } catch (e) {
    console.error(e);
  }
});
router.get("/", async (req, res) => {
  try {
    const restaurant = await db.Restaurant.findAll({
      where: { foodtype: req.query.type },
      include: [
        {
          model: db.Image,
          limit: 1,
        },
      ],
    });
    res.json(restaurant);
  } catch (e) {
    console.error(e);
    console.log("!@#!@#");
  }
});
router.get("/detailinfo", async (req, res) => {
  try {
    const restaurant = await db.Restaurant.findOne({
      where: { name: req.query.name },
      include: [
        {
          model: db.Image,
        },
        {
          model: db.DetailInfo,
        },
      ],
    });
    return res.json(restaurant);
  } catch (e) {
    console.error(e);
  }
});
router.post("/images", upload.array("image"), (req, res) => {
  res.json(req.files.map((file) => file.filename));
});
router.delete("/images", (req, res) => {
  try {
    fs.unlinkSync(`uploads/${req.body.src}`);
    res.send("remove success");
  } catch (e) {
    console.error(e);
  }
});

router.get("/search", async (req, res) => {
  try {
    let search = decodeURIComponent(req.query.search).split(",");
    let arr = search.map((v) => v.trim());
    // const test = await db.Restaurant.findAll({
    //   where: {
    //     tag: {
    //       [Op.like]: "%고기%",
    //     },
    //   },
    // });
    let firstARr = [];

    const targets = await Promise.all(
      arr.map((v) =>
        db.Restaurant.findAll({
          where: {
            tag: {
              [Op.like]: "%" + v + "%",
            },
          },
          include: [
            {
              model: db.Image,
            },
          ],
        })
      )
    );
    targets.map((v) => v.forEach((b) => firstARr.push(b.toJSON())));
    firstARr = removeDuplicatesArray(firstARr);

    res.json(firstARr);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
