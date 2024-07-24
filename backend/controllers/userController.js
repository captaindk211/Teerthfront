import User from "../models/User.js";

/*async function insert() {
  User.create({
    username: "Ramestta",
    email: "ramestta@gmail.com",
  });
}
insert();*/

//create new User
export const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
      role: req.body.role,
    });

    const savedUser = newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Please try again",
    });
  }
};
//update the User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

//delete the User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to Delete",
    });
  }
};

//getSingle  User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};

//get All  User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successful",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};
