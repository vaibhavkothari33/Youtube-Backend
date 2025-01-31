import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloundinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponce.js"
const registerUser = asyncHandler(async (req, res) => {
    // get user input
    // validation - not empty
    // check if user already exist
    // check for images then upload them to cloudinary
    // avatar checking
    // create user object and create entry in db
    // remove passowrd and refresh token field 
    // check for user creation
    // return yes

    const { fullName, email, username, password } = req.body
    console.log("email:", email);

    // if(fullName === ""{
    //     throw new ApiError(400,"Somethinh went wrong")
    // })
    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All field are reqired")
    }
    const existedUSer = User.findOne({
        $or: [{ fullName }, { email }]

    })
    if (existedUSer) {
        throw new ApiError(409, "User with email or username already exist")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudniry(avatarLocalPath)
    const coverImage = await uploadOnCloundinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required");

    }

    User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()

    })
    const createdUser = await User.findById(user_id).select(
        "-password -refreshToken"
        // these two will not get select
    )
    if (!createdUser){
        throw new ApiError(500,"Something went wrong while registering user")

    }
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Registered Successfully")
    )
    // return res.status(201).json({createdUser})

})
export { registerUser }