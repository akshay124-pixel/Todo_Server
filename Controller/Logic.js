import User from "../Schema/Model.js";
import asyncHandler from "../utils/asynchandler.js";

const adddata = asyncHandler(async (req, res) => {
  const { email, name } = req.body;

  // Validation
  if (!email || !name) {
    return res.status(400).json({
      success: false,
      message: "Credentials Not Exist",
    });
  }

  // Create User
  const userdata = await User.create({
    email,
    name,
  });

  // Response
  res.status(201).json({
    success: true,
    message: "Upload Successfully",
    data: userdata,
  });
});


const getdata = asyncHandler(async (req, res) => {
  const data = await User.find({});
  if (!data.length) {
    throw new Error("Data Not Exist");
  }
  res.status(200).json({
    message: "Successfully",
    data,
  });
});

const editdata = asyncHandler(async (req, res) => {
  const { email, name } = req.body;
  const { id } = req.params;
  const updateddata = await User.findByIdAndUpdate(
    id,
    { email, name },
    {
      returnDocument: true,
      runValidators: true,
    },
  );
  if (!updateddata) {
    throw new Error("Data Not Exist");
  }
  res.status(200).json({
    success: true,
    message: "Successfully Updated",
    data: updateddata,
  });
});

const deleteuser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userdeleted = await User.findByIdAndDelete(id);
  if (!userdeleted) {
   return res.status(404).json({
      message: "User Not Exits",
    });
  }
  res.status(201).json({
    sucess: true,
    message: "Successfully Deleted",
  });
})

export { deleteuser, editdata, getdata, adddata };
