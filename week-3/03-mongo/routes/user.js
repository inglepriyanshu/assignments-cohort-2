const express = require("express");
const { User} = require("../db/index")
const { Course} = require("../db/index")
const router = express.Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

   const response = await User.findOne({
    username: username,
    password: password
   })
   if(response){
    res.json({msg:"User already exists"});
   }
   else{
    try {
        const newUser = await User.create({ 
            username: username,
            password: password
        });
        res.json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating User:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
   }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username

    const response = await  User.findOne({
        username : username
    })
     response.purchasedCourses.push(courseId);

     await response.save();

    // await User.updateOne({
    //     username:username
    //  },{
    //     "$push":{
    //         purchasedCourses : courseId
    //     }
    //  })
     res.json({
        msg:"Purchase complete!"
     })

    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

   const user = await User.findOne({
        username: username
    })
    const courses = await Course.find({
        _id :{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses:courses
    })
})
    


module.exports = router