const express=require('express');
const router=express.Router();


//importing   the product controller
const studentController=require('../../../controllers/api/v1/student_controller');
//routes for update_favouriteSport
router.post('/:id/update_favouriteSport/',studentController.update);
//route for deleting  id and passing paramas
router.delete('/:id',studentController.delete);
//route for creating student
router.post('/createStudent',studentController.create);
//route for get all list of students
router.get('/',studentController.allstudents);
module.exports=router;