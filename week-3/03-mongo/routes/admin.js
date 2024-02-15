const { Router } = require("express");
const {Admin} = require("../db/index");
const {Course} = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

   const response = await Admin.findOne({
    username: username,
    password: password
}); 
if(response)
{
    return res.json({
        msg:"Admin already exists"
    });
}
else{
    try {
        const newUser = await Admin.create({ 
            username: username,
            password: password
        });
        res.json({ message: 'Admin created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
} 

})


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink}= req.body;

   try{ const response = await Course.create({
    title : title,
    description: description,
    imageLink: imageLink,
    price: price});

    const courseId = response._id;

    res.json({ message: 'Course created successfully', courseId: courseId })
   }catch(e)
   {
    console.error('Error creating course:', error); 
    res.status(500).json({ error: 'Internal server error' });
   }
     



});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});

    res.json({
        courses : response
    })
});

module.exports = router;